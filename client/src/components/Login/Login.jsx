import React, { useState } from 'react';
import './Login.module.css';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function logHandler(event) {
        event.preventDefault();
        axios.post('http://localhost:3001/login', { name, password }, { withCredentials: true })
            .then(response => {
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('name', response.data.name);
            })
        setName('')
        setPassword('');
        navigate('/')
    }

    return (
        <>
            <div className='wrapp'>
                <div className="form">
                    <form onSubmit={(event) => logHandler(event)}>
                        <TextField value={name} onChange={(event) => { setName(event.target.value)}} id="outlined-basic" label="Login" variant="outlined" required/>
                        <TextField value={password} onChange={(event) => { setPassword(event.target.value)}} id="outlined-basic" type='password' label="password" variant="outlined" required/>
                        <Button  type="submit" variant="outlined">LOGIN</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
