import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { createOrder, removeFromCart } from "../../redux/actions/cart.actions";

function Cart() {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const userId =useSelector((store) => store.user[0])
  const [order, setOrder] = useState(false);


  const sum = cart.reduce((acc, a) => {
  return acc + Number(a.price)}, 0)

  return (
    <>
      <div className={style.cart}>
        <ul className={style.list}>
          {cart &&
            cart.map((el) => (
              <>
                <li className={style.listItem} key={el.id}>
                  <div className={style.imgBlock}>
                  <img className={style.image} src={el.img} alt="" />
                  </div>
                 <div className={style.descr}>
                 {el.description}
                 </div>
                {el.price}
                  <Button onClick={() => dispatch(removeFromCart(el))}>X</Button>
                </li>
              </>
            ))}
        </ul>
        <strong> Total: ${sum}</strong>
        <Button onClick={() => createOrder(userId, cart)}>Checkout</Button>
      </div>
    </>
  );
}

export default Cart;
