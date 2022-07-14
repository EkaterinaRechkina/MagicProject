import axios from "axios";

export const getProduct = () => async (dispatch) => {
    try {
        axios.post(`http://localhost:3001/products/myproducts`,{}, { withCredentials: true })
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


export const addProduct = (author, title, description, img, user_id, price) => async (dispatch) => {
        try {
            const response = await axios.post(
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
                payload: response.data,
            });
        } catch (err) {
            console.log(err);
        }
};

export const editProduct = (id, title, description, img, price) => async (dispatch) => {
    try {
        const response = await axios.put(
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
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await axios.delete(
            `${process.env.REACT_APP_API_URL}/products/${id}`,
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
