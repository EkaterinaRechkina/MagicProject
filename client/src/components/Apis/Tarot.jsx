import React, { useState } from 'react'
import axios from 'axios'
import { Button } from "@mui/material";

function Tarot() {
    const [card, setCard] = useState('');

    function getTarot(){
        axios.get(process.env.REACT_APP_API_CARDS_URL,)
        .then(response => {
            console.log(response.data);
            setCard(response.data.cards[0].meaning_up)
        })
    }

  return (
    <>
     <Button onClick={() => getTarot()} variant="contained"/>
    <div>{card}
    <img src='http://localhost:3001/static/img/cards/Ace%20of%20Cups.jpg' alt="" />
    </div>
    
    </>
  )
}

export default Tarot

  // /home/a7heis7/CODE/MagicProject/server/static/img/cards