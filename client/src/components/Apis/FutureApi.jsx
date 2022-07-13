import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

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
         <div>{answer}</div>
         <Button onClick={() => getFortune()} variant="contained">Get wisdom</Button>
         </>
  )
}

export default FutureApi;
