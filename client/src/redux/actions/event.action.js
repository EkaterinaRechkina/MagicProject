import axios from "axios";

export const setEvents = () => async (dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/events`, {
      withCredentials: true,
    });
    console.log(result.data);
    dispatch({
      type: "SET_EVENTS",
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addEvent =
  (title, description, img, price, place, date, people) => async (dispatch) => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/events`,
        {
          title,
          description,
          place,
          img,
          price,
          date,
          people,
        },
        { withCredentials: true }
      );
      dispatch({
        type: "ADD_EVENT",
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
