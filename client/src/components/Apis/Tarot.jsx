import React, { useState } from 'react'
import axios from 'axios'
import { Button } from "@mui/material";

function Tarot() {
    const [card, setCard] = useState('');

    function getTarot(){
        axios.get(process.env.REACT_APP_API_CARDS_URL,)
        .then(response => {
            console.log(response.data.cards[0].meaning_up);
            setCard(response.data.cards[0].meaning_up)
        })
    }

  return (
    <>
     <Button onClick={() => getTarot()} variant="contained"/>
    <div>{card}</div>
    </>
  )
}

export default Tarot