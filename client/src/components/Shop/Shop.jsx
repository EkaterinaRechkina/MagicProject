import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Product from "../Product/Product";
import style from './Shop.module.css'

export default function Shop() {

    const [allProducts, setAllProducts] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.post('http://localhost:3001/products/all', {}, { withCredentials: true })
            .then(response => {
                dispatch({
                    type: "GET_PRODUCT",
                    payload: response.data.allProduct,
                })
                setAllProducts(response.data.allProduct);
            })
    }, [dispatch]);


    return (
        <div className={style.body}>
            <ul className={style.ulProducts}>
                {allProducts &&
                    allProducts.map((item, index) => (
                        <Product key={item.id} author={item.author} title={item.title} description={item.description} img={item.img}/>
                    ))}
            </ul>
        </div>
    );
}
