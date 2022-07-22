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

export const addStory = (formData) => async (dispatch) => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/stories`, formData, {
              withCredentials: true,
              headers: {
                  'Content-Type': 'multipart/form-data',
              }
          })
        dispatch({
            type: ADD_STORY,
            payload: result.data,
        });

    } catch (err) {
      console.log(err);
    }
  };

export const editStory = (id, formData) => async (dispatch) => {
  try {
    const result = await axios.put(
      `${process.env.REACT_APP_API_URL}/stories/${id}`, 
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
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
      `${process.env.REACT_APP_API_URL}/stories/${id}`,
      // {
      //   id,
      // },
      { withCredentials: true }
    );

    dispatch({
      type: DEL_STORY,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
