import axios from "axios";

export const addToCart = (item) => async (dispatch) => {
  dispatch({
    type: "ADD_ITEM",
    payload: item,
  });
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({
    type: "DEL_ITEM",
    payload: id,
  });
};
export const createOrder = (userId, cart) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/cart/checkout`, {userId, cart}, {withCredentials:true})
    .then((resp) => console.log(resp));
};
