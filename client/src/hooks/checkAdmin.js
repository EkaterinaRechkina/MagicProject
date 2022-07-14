import axios from "axios";

export function checkAdmin(dispatch) {
    axios.post('http://localhost:3001/admin', {}, { withCredentials: true })
        .then( response => {
            dispatch({
                type: "CHECK_ROLE",
                payload: response.data,
            })
        })
}
