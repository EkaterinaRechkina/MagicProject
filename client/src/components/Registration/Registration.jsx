import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../../hooks/checkAuth";
import { useDispatch } from "react-redux";
import "./registration.css";
import "animate.css";
import { checkAdmin } from "../../hooks/checkAdmin";

export default function Registration({ useStyles }) {
  const classes = useStyles();
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
          dispatch(checkAuth());
          dispatch(checkAdmin());
          navigate("/");
        }
      });
  }

  return (
    <div className="wrapp">
      {statusInfo ? <p className="info">{statusInfo}</p> : null}
      <form
        onSubmit={(event) => regHandler(event)}
        className="form-registration"
      >
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
          id="outlined-basic"
          label="Login"
          variant="outlined"
          className={
            !statusInfo
              ? "animate__animated animate__fadeInDown animate__delay-.5s"
              : "red_alert_reg"
          }
          required
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
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className={
            !statusInfo
              ? "animate__animated animate__fadeInDown animate__delay-1s"
              : "red_alert_reg"
          }
          required
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
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          id="outlined-basic"
          label="password"
          variant="outlined"
          className="animate__animated animate__fadeInDown animate__delay-2s"
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
              color: "#fff", // theme.palette.primary.main
            },
          }}
          className="animate__animated animate__fadeInDown animate__delay-2s"
        >
          Register
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
