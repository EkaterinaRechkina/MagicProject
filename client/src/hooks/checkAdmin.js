import axios from "axios";

export const checkAdmin = () => (dispatch) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/admin`,
      {},
      { withCredentials: true }
    )
    .then((response) => {
      dispatch({
        type: "CHECK_ROLE",
        payload: response.data,
      });
    });
};
