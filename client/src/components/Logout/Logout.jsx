import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Button} from "@mui/material";
import './Logout.module.css';

export function Logout() {
    const navigate = useNavigate();

    function logoutHandler(event) {
        event.preventDefault();
        axios.post('http://localhost:3001/logout',{},{ withCredentials: true })
            .then(response => {
                localStorage.clear();
            })
        navigate('/')
    }

    return (
        <div>
            <Button type='button' onClick={logoutHandler} color='inherit'>
                <p>Выйти</p>
            </Button>
        </div>
    )
}

