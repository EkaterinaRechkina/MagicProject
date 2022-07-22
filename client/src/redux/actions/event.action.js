import axios from "axios";

export const setEvents = (q) => async (dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/events`, {
      withCredentials: true,
    });
    dispatch({
      type: "SET_EVENTS",
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addEvent = (formData) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_API_URL}/events`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch({
      type: "ADD_EVENT",
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const editEvent =
  (id, formData, inputs, newDate, newPlace) => async (dispatch) => {
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_API_URL}/events/${id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
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
