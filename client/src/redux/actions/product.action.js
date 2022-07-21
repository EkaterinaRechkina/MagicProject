import axios from "axios";

export const getProduct = () => async (dispatch) => {
    try {
        axios.post(`${process.env.REACT_APP_API_URL}/shop/myproducts`,{}, { withCredentials: true })
            .then(response => {
                dispatch({
                    type: "GET_PRODUCT",
                    payload: response.data.allUserProduct,
                })
            })
    } catch (err) {
        console.log(err);
    }
}

export const addProduct = (formData) => async (dispatch) => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/shop`, formData, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            dispatch({
                type: "ADD_PRODUCT",
                payload: response.data,
            });
        } catch (err) {
            console.log(err);
        }
};

export const editProduct = (id, formData) => async (dispatch) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_API_URL}/shop/${id}`, formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        dispatch({
            type: "EDIT_PRODUCT",
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await axios.delete(
            `${process.env.REACT_APP_API_URL}/shop/${id}`,
            { withCredentials: true }
        );
        dispatch({
            type: "DELETE_PRODUCT",
            payload: id,
        })
    } catch (err) {
        console.log(err);
    }
}
