import axios from "axios";

export const checkAuth = () => (dispatch) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/checksession`,
      {},
      { withCredentials: true }
    )
    .then((response) => {
      dispatch({
        type: "CHECK_AUTH",
        payload: response.data,
      });
    });
};
