import React, { useState } from 'react';
import style from './Team.module.css';
import "animate.css";

function Team() {

    const [state, setState] = useState(true);
    const [redButton, setRedButton] = useState(true);

    const auntieHandler = () => {
        setState(!state);
        setRedButton(!redButton);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.listOfParticipants}>
                <li className={style.participant}>
                    <img src={require('../../images/team/Maxim.png')} alt='#' className={style.photoImage}/>
                    <p className={style.textName}>Maxim Zhilin</p>
                    <p className={style.textPosition}>Full-stack developer</p>
                </li>
                <li className={style.participant}>
                    <img src={require('../../images/team/Rechkina.png')} alt='#' className={style.photoImage}/>
                    <p className={style.textName}>Ekaterina Rechkina</p>
                    <p className={style.textPosition}>Team Lead <br/> Frontend developer</p>
                </li>
                <li className={style.participant}>
                    <img src={require('../../images/team/Krasnov.png')} alt='#' className={style.photoImage}/>
                    <p className={style.textName}>Anton Krasnov</p>
                    <p className={style.textPosition}>Full-stack developer</p>
                </li>
            </div>
            <img src={require('../../images/team/auntie.png')} alt='#' className={state ? style.auntieOff : `${style.auntieImage} animate__animated animate__flip`} />
            <div className={style.cloud}>
                <img src={require("../../images/team/cloudTeam.png")} alt="#"
                     className={state ? style.auntieOff : `${style.cloudAuntieForText} animate__animated animate__bounceIn animate__delay-1s`}/>
                <div className={state ? style.auntieOff : `${style.textAuntieInCloud} animate__animated animate__bounceIn animate__delay-1s`}>
                    <p>И кто из вас, мамкиных программистов, додумался установить на меня "display: none" ???</p>
                </div>
            </div>
            <div onClick={auntieHandler} className={redButton ? style.dangerOn : style.dangerOff}>
                <img src={require('../../images/team/redButton.png')} alt='#' className={style.danger}/>
            </div>
        </div>
    );
}

export default Team;
