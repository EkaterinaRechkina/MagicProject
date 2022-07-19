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
  const [statusInfo, setStatusInfo] = useState("");
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
        if (response.data.message) {
          setStatusInfo(response.data.message);
        } else {
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
          className= {!statusInfo ? 'animate__animated animate__fadeInDown animate__delay-0.5s' : 'red_alert_reg'}
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
          className= {!statusInfo ? 'animate__animated animate__fadeInDown animate__delay-0.5s' : 'red_alert_reg'}
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
          className='animate__animated animate__fadeInDown animate__delay-0.5s'
          required
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{ width: "150px", color: "#2b256f" }}
          className='animate__animated animate__fadeInDown animate__delay-0.5s'
        >
          Register
        </Button>
      </form>
      <div id='witchReg' className="witchReg">
        <img src={require('../../images/witchLeft.png')} alt='#' className='witchImgReg'/>
        <img src={require('../../images/witch.png')} alt='#' className='witchRImgReg'/>
      </div>
      {statusInfo ? <p className="info">{statusInfo}</p> : null}
    </div>
  );
}
