import axios from "axios";

export const getFavorites = () => async (dispatch) => {
    try {
        axios.get(`${process.env.REACT_APP_API_URL}/favorites`,{ withCredentials: true })
            .then(response => {
                dispatch({
                    type: "GET_FAVORITE",
                    payload: response.data.allUserProduct,
                })
            })
    } catch (err) {
        console.log(err);
    }
}

export const addFavorites = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/favorites`,{id}, { withCredentials: true });
        dispatch({
            type: "ADD_FAVORITE",
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteFavorites = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_FAVORITE",
            payload: id,
        })
    } catch (err) {
        console.log(err);
    }
}
