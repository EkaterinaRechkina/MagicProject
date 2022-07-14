import axios from "axios";

export const addProduct = (author, title, description, img, user_id, price) => async (dispatch) => {
        try {
            const result = await axios.post(
                `${process.env.REACT_APP_API_URL}/products`,
                {
                    author,
                    title,
                    description,
                    img,
                    user_id,
                    price
                },
                { withCredentials: true }
            );
            dispatch({
                type: "ADD_PRODUCT",
                payload: result.data,
            });
        } catch (err) {
            console.log(err);
        }
};

export const editProduct = (id, title, description, img, price) => async (dispatch) => {
    try {
        const result = axios.put(
            `${process.env.REACT_APP_API_URL}/products/${id}`,
            {
                id,
                title,
                description,
                img,
                price
            },
            { withCredentials: true }
        );
        dispatch({
            type: "EDIT_PRODUCT",
            payload: result.data,
        })
    } catch (err) {
        console.log(err);
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const result = await axios.delete(
            `${process.env.REACT_APP_API_URL}/products/${id}`,
            {},
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
