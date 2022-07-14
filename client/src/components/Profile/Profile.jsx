import React, {useEffect, useState} from 'react';
import style from './Profile.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/actions/userActions";
import { addProduct } from "../../redux/actions/product.action";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import axios from "axios";

function Profile() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");

    const [open, setOpen] = useState(false);
    const openForm = () => setOpen(true);
    const closeForm = () => setOpen(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch])

    const user = useSelector(store => store.user);

    function submitHandler(event) {
        event.preventDefault();
        const user_id = user[0];
        const author = user[1];
        dispatch(addProduct(author, title, description, img, user_id, price));
        closeForm();
        setTitle("");
        setDescription("");
        setImg("");
        setPrice("");
    }


    return (
        <div className={style.wrap}>
            <div className={style.profile}>
                <div className={style.image_profile}>
                    <img src={require('../../images/default.png')} alt='#'/>
                </div>
                <div className={style.info_profile}>
                    <div className={style.heading_profile}>
                        <h1>Welcome, {user[1]}!</h1>
                    </div>
                    <div className={style.text_profile}>
                        <p>What are you willing to offer?</p>
                    </div>
                    <Button onClick={openForm} variant="outlined" sx={{margin: "20px 30px", display: "flex", justifyContent: "flex-start",}}>
                        Sell something
                    </Button>
                </div>
            </div>
            {open && (
                <Box onSubmit={submitHandler} component="form" sx={{"& .MuiTextField-root": {m: 1, width: "45ch",},}} noValidate autoComplete="off">
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
                        <TextField required id="outlined-required" label="Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                        <TextField required id="outlined-required" label="Image" value={img} onChange={(event) => setImg(event.target.value)}/>
                        <TextField required id="outlined-required" label="Price" value={price} onChange={(event) => setPrice(event.target.value)}/>
                        <TextareaAutosize value={description} aria-label="description" placeholder="Product description" style={{ width: 400, height: 300, resize: "none", fontSize: 16 }}
                                          onChange={(event) => setDescription(event.target.value)}/>
                        <Button variant="outlined" type="submit" sx={{ width: 200, marginTop: 2 }}>
                            Add product
                        </Button>
                        <Button variant="outlined" sx={{ width: 200, marginTop: 2 }} onClick={closeForm}>
                            Close
                        </Button>
                    </div>
                </Box>
            )}

            <div className={style.ulProductUser}>

            </div>
        </div>
    );
}

export default Profile;
