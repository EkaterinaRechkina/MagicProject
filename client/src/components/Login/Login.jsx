import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../../hooks/checkAuth";
import { checkAdmin } from "../../hooks/checkAdmin";
import { useDispatch } from "react-redux";
import "./login.css";
import 'animate.css';

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [statusName, setStatusName] = useState(true);
  const [statusPas, setStatusPas] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function logHandler(event) {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3001/login",
        { name, password },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.message === 'User not found!') {
          alert(response.data.message);
          setStatusName(false);
        } else if (response.data.message === 'Wrong password!') {
          alert(response.data.message);
          setStatusPas(false);
        } else {
          setStatusName(true);
          setStatusPas(true);
          dispatch(checkAuth())
          dispatch(checkAdmin())
          navigate("/");
        }
      });
  }

  return (
    <div className="wrapp">
      <form onSubmit={(event) => logHandler(event)} className="login-form">
        <TextField
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="outlined-basic"
          label="Login"
          variant="outlined"
          required
          className = {statusName ? 'animate__animated animate__fadeInDown animate__delay-0.5s' : 'red_alert'}
        />
        <TextField
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          id="outlined-basic"
          type="password"
          label="password"
          variant="outlined"
          className={statusPas ? 'animate__animated animate__fadeInDown animate__delay-1s' : 'red_alert'}
          required
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{ width: "150px", color: "#2b256f" }}
          className='animate__animated animate__fadeInDown animate__delay-2s'
        >
          LOGIN
        </Button>
      </form>
      <div id='witch' className="witch">
        <img src={require('../../images/witchLeft.png')} alt='#' className='witchImg'/>
        <img src={require('../../images/witch.png')} alt='#' className='witchRImg'/>
      </div>
    </div>
  );
}
