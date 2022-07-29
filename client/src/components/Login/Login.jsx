import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../../hooks/checkAuth";
import { checkAdmin } from "../../hooks/checkAdmin";
import { useDispatch } from "react-redux";
import "./Login.css";
import "animate.css";

export default function Login({ useStyles }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [statusInfo, setStatusInfo] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function logHandler(event) {
    event.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/login`,
        { name, password },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.message) {
          setStatusInfo(response.data.message);
        } else {
          dispatch(checkAuth());
          dispatch(checkAdmin());
          navigate("/");
        }
      });
  }

  return (
    <div className="wrapp">
      {statusInfo ? <p className="info">{statusInfo}</p> : null}
      <form onSubmit={(event) => logHandler(event)} className="login-form">
        <TextField
          classes={{
            root: classes.root,
          }}
          sx={{
            "& label": { color: "#711d6f" },
            "& label.Mui-focused": {
              color: "#711d6f",
            },
            "& legend": {
              color: "#711d6f",
            },
          }}
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="outlined"
          label="Login"
          variant="outlined"
          required
          className={
            !statusInfo
              ? "animate__animated animate__fadeInDown animate__delay-0.5s"
              : "red_alert"
          }
        />
        <TextField
          classes={{
            root: classes.root,
          }}
          sx={{
            "& label": { color: "#711d6f" },
            "& label.Mui-focused": {
              color: "#711d6f",
            },
            "& legend": {
              color: "#711d6f",
            },
          }}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          id="outlined-basic"
          type="password"
          label="password"
          variant="outlined"
          className={
            !statusInfo
              ? "animate__animated animate__fadeInDown animate__delay-0.5s"
              : "red_alert"
          }
          required
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{
            margin: "0 auto",
            width: "200px",
            border: "none",
            color: "#2b256f",
            textAlign: "center",
            ":hover": {
              border: "none",
              bgcolor: "#eba7d0",
              color: "#fff",
            },
          }}
          className="animate__animated animate__fadeInDown animate__delay-0.5s"
        >
          LOGIN
        </Button>
      </form>
      <div id="witch" className="witch">
        <img
          src={require("../../images/witchLeft.png")}
          alt="#"
          className="witchImg"
        />
        <img
          src={require("../../images/witch.png")}
          alt="#"
          className="witchRImg"
        />
      </div>
    </div>
  );
}
