import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import "./api.css";

function KanyeApi() {
  const [answer, setAnswer] = useState("");

  function askKanye() {
    axios.get("https://api.kanye.rest").then((response) => {
      setAnswer(response.data.quote);
    });
  }

  return (
    <>
      <Button
        onClick={() => askKanye()}
        variant="contained"
        sx={{ backgroundColor: "#3e8ec1", width: "200px" }}
      >
        Ask Kanye
      </Button>
      <div className="text-tarot ">{answer}</div>
    </>
  );
}

export default KanyeApi;
