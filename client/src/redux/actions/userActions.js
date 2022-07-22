import axios from "axios";
import { USER_INFO } from "../types";

export const getUserInfo = () => async (dispatch) => {
  try {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/userinfo`,
        {},
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data) {
          dispatch({
            type: USER_INFO,
            payload: response.data.userInfo,
          });
        }
      });
  } catch (err) {
    console.log(err);
  }
};
