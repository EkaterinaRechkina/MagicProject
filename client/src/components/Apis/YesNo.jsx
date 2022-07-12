import React from 'react'
import { useState } from 'react'
import { Button } from "@mui/material";

function YesNo() {
    const [answer, setAnswer] = useState();

    function getAnswer(){
        const result = Math.ceil(Math.random() * 0.5)
        setAnswer(result)
    } 
    

  return (
            <>
            <Button onClick={() => getAnswer()} variant="contained"/>
            <div>{answer}</div>
            </>
  )
}

export default YesNo