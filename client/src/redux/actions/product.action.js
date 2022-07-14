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
