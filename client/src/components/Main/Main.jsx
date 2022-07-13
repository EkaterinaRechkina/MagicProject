import React from 'react'
import FutureApi from '../Apis/FutureApi'
import Tarot from '../Apis/Tarot'
import YesNo from '../Apis/YesNo'
import KanyeApi from '../Apis/KanyeApi'
import styles from './styles.module.css'

function Main() {
  return (
    
    <div className={styles.container}>
        <div className={styles.faceimg}><img src="https://images.unsplash.com/photo-1512331455279-c8ae8178f586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" /></div>
        <div className={styles.api}>
            <div className={styles.block}><FutureApi /></div>
            <div className={styles.block}><Tarot /></div>
            <div className={styles.block}><YesNo /></div>
            <div className={styles.block}><KanyeApi /></div>

           
          
        </div>
    </div>
  )
}

export default Main