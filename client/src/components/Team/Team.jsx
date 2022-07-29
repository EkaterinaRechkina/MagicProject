import React, { useState } from "react";
import "./Team.css";
import "animate.css";

function Team() {
  const [state, setState] = useState(true);
  const [redButton, setRedButton] = useState(true);

  const auntieHandler = () => {
    setState(!state);
    setRedButton(!redButton);
  };

  return (
    <div className="wrapper">
      <div className="listOfParticipants">
        <li className="participant">
          <img
            src={require("../../images/team/Maxim.png")}
            alt="#"
            className="photoImage"
          />
          <p className="textName">Maxim Zhilin</p>
          <p className="textPosition">Full-stack developer</p>
        </li>
        <li className="participant">
          <img
            src={require("../../images/team/Rechkina.png")}
            alt="#"
            className="photoImage"
          />
          <p className="textName">Ekaterina Rechkina</p>
          <p className="textPosition">
            Team Lead <br /> Frontend developer
          </p>
        </li>
        <li className="participant">
          <img
            src={require("../../images/team/Krasnov.png")}
            alt="#"
            className="photoImage"
          />
          <p className="textName">Anton Krasnov</p>
          <p className="textPosition">Full-stack developer</p>
        </li>
      </div>
      <img
        src={require("../../images/team/auntie.png")}
        alt="#"
        className={
          state ? "auntieOff" : `auntieImage animate__animated animate__flip`
        }
      />
      <div className="cloud">
        <img
          src={require("../../images/team/cloudTeam.png")}
          alt="#"
          className={
            state
              ? "auntieOff"
              : `cloudAuntieForText animate__animated animate__bounceIn animate__delay-1s`
          }
        />
        <div
          className={
            state
              ? "auntieOff"
              : `textAuntieInCloud animate__animated animate__bounceIn animate__delay-1s`
          }
        >
          <p>
            И кто из вас, мамкиных программистов, додумался установить на меня
            "display: none" ???
          </p>
        </div>
      </div>
      <div
        onClick={auntieHandler}
        className={redButton ? "dangerOn" : "dangerOff"}
      >
        <img
          src={require("../../images/secret.png")}
          alt="#"
          className="danger"
        />
      </div>
    </div>
  );
}

export default Team;
