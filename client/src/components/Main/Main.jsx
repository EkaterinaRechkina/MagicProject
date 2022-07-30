import React, { useState } from "react";
import FutureApi from "../Apis/FutureApi";
import Tarot from "../Apis/Tarot";
import YesNo from "../Apis/YesNo";
import KanyeApi from "../Apis/KanyeApi";
import "./Main.css";
import zelda from "../../images/zelda2.jpg";
import main from "../../images/main.jpg";

function Main() {
  const [change, setChange] = useState(false);

  return (
    <div className="container">
      <div className="faceimg">
        <img
          className="img"
          src={change ? zelda : main}
          alt="img"
          onClick={() => setChange((prevMode) => !prevMode)}
        />
      </div>
      <div className="api">
        <div className="tarot">
          <Tarot />
        </div>
        <div className="block">
          <div className="blockItem">
            <FutureApi />
          </div>
          <div className="blockItem">
            <YesNo />
          </div>
          <div className="blockItem">
            <KanyeApi />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
