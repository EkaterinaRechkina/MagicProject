import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import axios from 'axios'
import './Registration.module.css'
import { useNavigate } from 'react-router-dom';
import { checkAuth } from "../../hooks/checkAuth";
import { useDispatch } from "react-redux";

export default function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate();

    function regHandler(event){
        event.preventDefault();
        axios.post('http://localhost:3001/registration', { name, email, password }, { withCredentials: true})
            .then(response => {
                if (response.data.message) {
                    alert(response.data.message);
                }
                else {
                    checkAuth(dispatch);
                    navigate('/')
                }
            })
    }

    return (
            <div className='wrapp'>
                <div className="form">
                    <form onSubmit={(event) => regHandler(event)}>
                        <TextField value={name} onChange={(event) => {
                            setName(event.target.value)}} id="outlined-basic" label="Login" variant="outlined" required/>
                        <TextField type='email' value={email} onChange={(event) => {setEmail(event.target.value)}}
                                   id="outlined-basic" label="Email" variant="outlined" required/>
                        <TextField type='password' value={password} onChange={(event) => {
                            setPassword(event.target.value)}} id="outlined-basic" label="password" variant="outlined" required/>
                        <Button type="submit" variant="outlined" >Regiser</Button>
                    </form>
                </div>
            </div>
    )
}
