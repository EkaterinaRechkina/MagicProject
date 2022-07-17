import axios from "axios";

export const setEvents = (q) => async (dispatch) => {
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
  (title, description, date, img, price, people, place) => async (dispatch) => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/events`,
        {
          title,
          description,
          date,
          img,
          price,
          people,
          place,
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
export const editEvent = (id, inputs) => async (dispatch) => {
  console.log(inputs);
  try {
    const result = await axios.put(
      `${process.env.REACT_APP_API_URL}/events/${id}`,
      inputs
    );
    console.log("result", result.data);
    dispatch({
      type: "EDIT_EVENT",
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const delEvent = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(
      `${process.env.REACT_APP_API_URL}/events/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "DEL_EVENT",
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
