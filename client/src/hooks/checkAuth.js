import axios from "axios";

export function checkAuth(dispatch) {
        axios.post('http://localhost:3001/checksession', {}, { withCredentials: true })
            .then( response => {
                dispatch({
                    type: "CHECK_AUTH",
                    payload: response.data,
                })
            })
}
