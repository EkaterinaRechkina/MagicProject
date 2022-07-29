import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";
import "./Api.css";

function FutureApi() {
  const [answer, setAnswer] = useState("");

  function getFortune() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/future`)
      .then((response) => {
        setAnswer(response.data);
      });
  }

  return (
    <>
      <Button
        onClick={() => getFortune()}
        variant="contained"
        sx={{ backgroundColor: "#3e8ec1", width: "200px" }}
      >
        Get wisdom
      </Button>
      <div className="text-tarot ">{answer}</div>
    </>
  );
}

export default FutureApi;
