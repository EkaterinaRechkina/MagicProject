import React from 'react'
import { useState } from 'react'
import { Button } from "@mui/material";

function YesNo() {
    const [answer, setAnswer] = useState('');
    const [num, setNum] = useState(1)
    function getAnswer(min, max){
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        setNum(Math.round(rand));
        if (num === 1) {
          setAnswer("YES")
        } else if (num === 2) {
          setAnswer("NO")
        } else setAnswer("MAY BE")
    } 
    

  return (
            <>
            <Button onClick={() => getAnswer(1, 3)} variant="contained">Get lucky</Button>
            <div>{answer}</div>
            </>
  )
}

export default YesNo