import React, { useEffect } from 'react';
import style from './Profile.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/actions/userActions";

function Profile() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch])

    const user = useSelector(store => store.user);

    return (
        <div className={style.profile}>
            <div className={style.image_profile}>
                <img src={require('../../images/default.png')} alt='#'/>
            </div>
            <div className={style.info_profile}>
                <div className={style.heading_profile}><h1>Welcome, {user[1]}!</h1></div>
                <div className={style.text_profile}><p>Text</p></div>
                <button onClick={() => alert('Я пока ничего не делаю')} className={style.button_sell}>Sell something</button>
            </div>
        </div>
    );
}

export default Profile;
