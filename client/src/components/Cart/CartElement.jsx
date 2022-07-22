import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cart.actions";
import style from "./style.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

function CartElement({ id, img, title, price }) {
  const dispatch = useDispatch();
  return (
    <>
      <li className={style.listItem} key={id}>
        <div className={style.descrblock}>
          <img className={style.image} src={`${process.env.REACT_APP_API_URL}/static${img}`} alt="" />
          <p className={style.descr}>{title}</p>
          <div className={style.priceblock}>$: {price}</div>
        </div>
        <Button id={id} onClick={() => dispatch(removeFromCart(id))}>
          <DeleteIcon />
        </Button>
      </li>
    </>
  );
}

export default CartElement;
