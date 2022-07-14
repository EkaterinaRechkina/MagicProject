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
export const editEvent =
  (
    id,
    newTitle,
    newDescription,
    newDate,
    newImg,
    newPrice,
    newPeople,
    newPlace
  ) =>
  async (dispatch) => {
    try {
      const result = await axios.patch(
        `${process.env.REACT_APP_API_URL}/events/${id}`,
        {
          id,
          newTitle,
          newDescription,
          newDate,
          newImg,
          newPrice,
          newPeople,
          newPlace,
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
