import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import Product from "../Product/Product";
import style from './Shop.module.css'

export default function Shop() {

    const [query, setQuery] = useState('');
    const products = useSelector(store => store.product);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            await axios.get(`http://localhost:3001/shop?q=${query}`,{ withCredentials: true })
                .then(response => {
                    console.log(response.data)
                    dispatch({
                        type: "GET_PRODUCT",
                        payload: response.data,
                    })
                })
        };
        fetchProducts();
    }, [query]);

    return (
        <div className={style.body}>
            <div className={style.filter}>
                <div className={style.inputs}>
                    <p>Поиск товара</p>
                    <input type='text' placeholder='Search...' className={style.search} onChange={e => setQuery((e.target.value))}/>
                    <p>Цена</p>
                    <div className={style.slider}></div>
                    <div className={style.filters_inputs}>
                        <label className={style.filter_price_label}>
                            <span className={style.filter_price_text}>от</span>
                            <input type='number' min = "500" max = "999999" placeholder='500' className={style.filter_price} />
                            <span className={style.filter_price_text}>$</span>
                        </label>
                        <label className={style.filter_price_label}>
                            <span className={style.filter_price_text}>от</span>
                            <input type='number' min = "500" max = "999999" placeholder='999999' className={style.filter_price} />
                            <span className={style.filter_price_text}>$</span>
                        </label>
                    </div>
                </div>
            </div>
            <ul className={style.ulProducts}>
                {products.map(item => <Product key={item.id} item={item}/>)}
            </ul>
        </div>
    );
}
