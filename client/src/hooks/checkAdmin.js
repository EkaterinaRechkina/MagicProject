import axios from "axios";

export const checkAdmin = () => (dispatch) => {
    axios.post('http://localhost:3001/admin', {}, { withCredentials: true })
        .then( response => {
            dispatch({
                type: "CHECK_ROLE",
                payload: response.data,
            })
        })
}
