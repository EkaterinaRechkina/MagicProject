import axios from "axios";
import { SET_STORY, ADD_STORY, EDIT_STORY, DEL_STORY } from "../types";

export const setStories = () => async (dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/stories`, {
      withCredentials: true,
    });

    dispatch({
      type: SET_STORY,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addStory = (title, description, img) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_API_URL}/stories`,
      {
        title,
        description,
        img,
      },
      { withCredentials: true }
    );
    console.log("result", result.data);
    dispatch({
      type: ADD_STORY,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editStory = (id, title, description, img) => async (dispatch) => {
  try {
    const result = await axios.put(`${process.env.REACT_APP_API_URL}/${id}`, {
      id,
      title,
      description,
      img,
    });
    console.log("result", result.data);
    dispatch({
      type: EDIT_STORY,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteStory = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(
      `${process.env.REACT_APP_API_URL}/${id}`,
      {
        id,
      }
    );

    dispatch({
      type: DEL_STORY,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
