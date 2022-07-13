import React, { useState } from 'react';
import './Login.module.css';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from "../../hooks/checkAuth";
import { useDispatch } from "react-redux";

export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate();

    function logHandler(event) {
        event.preventDefault();
        axios.post('http://localhost:3001/login', { name, password }, { withCredentials: true })
            .then(response => {
                if (response.data.message) {
                    alert(response.data.message);
                } else {
                    checkAuth(dispatch);
                    navigate('/')
                }
            })
    }

    return (
        <>
            <div className='wrapp'>
                <div className="form">
                    <form onSubmit={(event) => logHandler(event)}>
                        <TextField value={name} onChange={(event) => { setName(event.target.value)}} id="outlined-basic" label="Login" variant="outlined" required/>
                        <TextField value={password} onChange={(event) => { setPassword(event.target.value)}} id="outlined-basic" type='password' label="password" variant="outlined" required/>
                        <Button type="submit" variant="outlined">LOGIN</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
