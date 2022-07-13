import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

function Tarot() {
  const [cardDesc, setcardDesc] = useState("");
  const [cardName, setcardName] = useState("");

  
  async function getTarot() {
    const response = await axios.get(process.env.REACT_APP_API_CARDS_URL);
    setcardDesc(response.data.cards[0].meaning_up);
    setcardName(response.data.cards[0].name.split(' ').join('%20'))
  }

  return (
    <>
      <Button onClick={() => getTarot()} variant="contained" >Get Tarot</Button>
      <div>
        {cardDesc}
        <img 
          src={cardName && `http://localhost:3001/static/img/cards/${cardName}.jpg`}
          alt=""
        />
      </div>
    </>
  );
}

export default Tarot;

// /home/a7heis7/CODE/MagicProject/server/static/img/cards
