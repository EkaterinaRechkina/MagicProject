import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import axios from 'axios'
import './Registration.module.css'
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function regHandler(event){
        event.preventDefault();
        axios.post('http://localhost:3001/registration', { name, password }, { withCredentials: true})
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
                    <form onSubmit={(event) => regHandler(event)}>
                        <TextField value={name} onChange={(event) => {
                            setName(event.target.value)}} id="outlined-basic" label="Login" variant="outlined" required/>
                        <TextField value={password} onChange={(event) => {
                            setPassword(event.target.value)}} id="outlined-basic" type='password' label="password" variant="outlined" required/>
                        <Button type="submit" variant="outlined" >Regiser</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
