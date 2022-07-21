import React, { useState } from "react";
import FutureApi from "../Apis/FutureApi";
import Tarot from "../Apis/Tarot";
import YesNo from "../Apis/YesNo";
import KanyeApi from "../Apis/KanyeApi";
import styles from "./styles.module.css";
import zelda from "../../images/zelda2.jpg";
import main from "../../images/main.jpg";

function Main() {
  const [change, setChange] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.faceimg}>
        <img
          src={change ? zelda : main}
          alt="img"
          onClick={() => setChange((prevMode) => !prevMode)}
        />
      </div>
      <div className={styles.api}>
        <div className={styles.tarot}>
          <Tarot />
        </div>
        <div className={styles.block}>
          <div className={styles.blockItem}>
            <FutureApi />
          </div>
          <div className={styles.blockItem}>
            <YesNo />
          </div>
          <div className={styles.blockItem}>
            <KanyeApi />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
