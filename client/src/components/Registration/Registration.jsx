import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import axios from 'axios'
import './Registration.module.css'
import { useNavigate } from 'react-router-dom';
import {checkAuth} from "../../hooks/checkAuth";
import {useDispatch} from "react-redux";

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
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('name', response.data.userName);
                checkAuth(dispatch);
            })
        setName('')
        setEmail('')
        setPassword('');
        navigate('/')
    }

    return (
        <>
            <div className='wrapp'>
                <div className="form">
                    <form onSubmit={(event) => regHandler(event)}>
                        <TextField value={name} onChange={(event) => {
                            setName(event.target.value)}} id="outlined-basic" label="Login" variant="outlined" required/>
                        <TextField value={email} onChange={(event) => {
                            setEmail(event.target.value)}} id="outlined-basic" label="Email" variant="outlined" required/>
                        <TextField value={password} onChange={(event) => {
                            setPassword(event.target.value)}} id="outlined-basic" type='password' label="password" variant="outlined" required/>
                        <Button type="submit" variant="outlined" >Regiser</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
