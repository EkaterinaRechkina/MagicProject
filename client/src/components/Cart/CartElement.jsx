import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cart.actions";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";

function CartElement({ id, img, title, price }) {
  const dispatch = useDispatch();
  return (
    <>
      <li className="listItem" key={id}>
        <div className="descrblock">
          <img
            className="image"
            src={`${process.env.REACT_APP_API_URL}/static${img}`}
            alt=""
          />
          <p className="descr">{title}</p>
          <div className="priceblock">$: {price}</div>
        </div>
        <Button id={id} onClick={() => dispatch(removeFromCart(id))}>
          <DeleteIcon />
        </Button>
      </li>
    </>
  );
}

export default CartElement;
