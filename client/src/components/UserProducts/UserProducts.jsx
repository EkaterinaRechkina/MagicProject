import React, {useState} from 'react';
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import style from "./UserProducts.module.css";
import OneUserProduct from "../OneUserProduct/OneUserProduct";

function UserProducts() {
    const [allUserProducts, setAllUserProducts] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.post(`http://localhost:3001/products/myproducts`,{}, { withCredentials: true })
            .then(response => {
                dispatch({
                    type: "GET_PRODUCT",
                    payload: response.data.allUserProduct,
                })
                setAllUserProducts(response.data.allUserProduct);
            })
    }, [dispatch])

    return (
        <div className={style.body}>
            <ul className={style.ulProducts}>
                {allUserProducts &&
                    allUserProducts.map(item => (
                        <OneUserProduct key={item.id} id={item.id} author={item.author} title={item.title} description={item.description} img={item.img} price={item.price}/>
                    ))}
            </ul>
        </div>
    );
}

export default UserProducts;
