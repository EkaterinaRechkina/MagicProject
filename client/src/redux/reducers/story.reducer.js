import { SET_STORY, ADD_STORY, EDIT_STORY, DEL_STORY } from "../types";

export function storyReducer(state = [], action) {
  const { type } = action;

  switch (type) {
    case SET_STORY: {
      return action.payload;
    }

    case ADD_STORY: {
      return [action.payload, ...state];
    }
    case EDIT_STORY: {
      return state.map((el) =>
        el.id == action.payload.id ? action.payload : el
      );
    }
    case DEL_STORY: {
      const result = state.filter((task) => task.id !== action.payload);
      return result;
    }

    default: {
      return state;
    }
  }
}
