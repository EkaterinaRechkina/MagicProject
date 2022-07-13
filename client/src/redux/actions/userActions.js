import axios from "axios";

export const getUserInfo = () => async (dispatch) => {
    try {
        axios.post('http://localhost:3001/userinfo', {}, { withCredentials: true })
            .then(response => {
                if (response.data) {
                    dispatch({
                        type: "USER_INFO",
                        payload: response.data.userInfo,
                    })
                }
            })
    } catch (err) {
        console.log(err);
    }
};
