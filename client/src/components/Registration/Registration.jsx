import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../../hooks/checkAuth";
import { useDispatch } from "react-redux";
import "./registration.css";
import 'animate.css';
import {checkAdmin} from "../../hooks/checkAdmin";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusName, setStatusName] = useState(true);
  const [statusEmail, setStatusEmail] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function regHandler(event) {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3001/registration",
        { name, email, password },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.message === 'A user with this username already exists. Log in or register with another username.') {
          setStatusName(false);
          alert(response.data.message);
        } else if (response.data.message === 'A user with this email address already exists. Log in or register with a different email address.') {
          setStatusEmail(false);
          alert(response.data.message);
        } else {
          setStatusName(true);
          setStatusEmail(true);
          dispatch(checkAuth())
          dispatch(checkAdmin())
          navigate("/");
        }
      });
  }

  return (
    <div className="wrapp">
      <form
        onSubmit={(event) => regHandler(event)}
        className="form-registration"
      >
        <TextField
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="outlined-basic"
          label="Login"
          variant="outlined"
          className= {statusName ? 'animate__animated animate__fadeInDown animate__delay-.5s' : 'red_alert_reg'}
          required
        />
        <TextField
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className= {statusEmail ? 'animate__animated animate__fadeInDown animate__delay-1s' : 'red_alert_reg'}
          required
        />
        <TextField
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          id="outlined-basic"
          label="password"
          variant="outlined"
          className='animate__animated animate__fadeInDown animate__delay-2s'
          required
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{ width: "150px", color: "#2b256f" }}
          className='animate__animated animate__fadeInDown animate__delay-2s'
        >
          Register
        </Button>
      </form>
      <div id='witch' className="witch">
        <img src={require('../../images/witchLeft.png')} alt='#' className='witchImg'/>
        <img src={require('../../images/witch.png')} alt='#' className='witchRImg'/>
      </div>
    </div>
  );
}
