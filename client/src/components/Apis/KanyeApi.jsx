import React, { useState } from 'react'
import axios from "axios";
import { Button } from "@mui/material";

function KanyeApi() {
  const [answer, setAnswer] = useState("");

  function askKanye() {
    axios
      .get('https://api.kanye.rest')
      .then((response) => {
        setAnswer(response.data.quote);
      });
  }

  return (
    <>
    <Button onClick={() => askKanye()} variant="contained" > Ask Kanye</Button>
    <div>{answer}</div>
    </>
  )
}

export default KanyeApi