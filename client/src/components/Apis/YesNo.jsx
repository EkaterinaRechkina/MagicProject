import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import "./api.css";

function YesNo() {
  const [answer, setAnswer] = useState("");
  const [num, setNum] = useState(1);
  function getAnswer(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    setNum(Math.round(rand));
    if (num === 1) {
      setAnswer("YES");
    } else if (num === 2) {
      setAnswer("NO");
    } else setAnswer("MAY BE");
  }

  return (
    <>
      <Button
        onClick={() => getAnswer(1, 3)}
        variant="contained"
        sx={{ backgroundColor: "#2ca1c7", width: "200px" }}
      >
        Will it come true
      </Button>
      <div className="text-tarot ">{answer}</div>
    </>
  );
}

export default YesNo;
