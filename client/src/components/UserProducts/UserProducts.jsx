import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./UserProducts.module.css";
import OneUserProduct from "../OneUserProduct/OneUserProduct";
import { getProduct } from "../../redux/actions/product.action";

export default function UserProducts({ useStyles }) {
  const allGoods = useSelector((store) => store.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className={style.body}>
      <ul className={style.ulProducts}>
        {!allGoods.length ? (
          <h1>You have not added any products yet!</h1>
        ) : (
          allGoods &&
          allGoods.map((item) => (
            <OneUserProduct
              useStyles={useStyles}
              key={item.id}
              id={item.id}
              author={item.author}
              title={item.title}
              description={item.description}
              img={item.img}
              price={item.price}
            />
          ))
        )}
      </ul>
    </div>
  );
}
