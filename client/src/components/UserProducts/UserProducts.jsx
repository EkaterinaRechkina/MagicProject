import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./UserProducts.module.css";
import OneUserProduct from "../OneUserProduct/OneUserProduct";
import { getProduct } from "../../redux/actions/product.action";

export default function UserProducts() {
    const allGoods = useSelector(store => store.product);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    return (
        <div className={style.body}>
            <ul className={style.ulProducts}>
                {!allGoods.length ? <h1>Вы еще не добавили ни одного товара!</h1> : allGoods &&
                    allGoods.map(item => (
                        <OneUserProduct key={item.id} id={item.id} author={item.author} title={item.title} description={item.description} img={item.img} price={item.price} />
                    ))}
            </ul>
        </div>
    );
}
