import React from "react";
import FutureApi from "../Apis/FutureApi";
import Tarot from "../Apis/Tarot";
import YesNo from "../Apis/YesNo";
import KanyeApi from "../Apis/KanyeApi";
import styles from "./styles.module.css";

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.faceimg}>
        <img
          src="https://images.unsplash.com/photo-1607773709367-06b7a91f7e4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="img"
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
