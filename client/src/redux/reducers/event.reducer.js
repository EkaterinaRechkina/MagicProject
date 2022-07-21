export function eventReducer(state = [], action) {
    switch (action.type) {
        case "SET_EVENTS": {
            return action.payload;
        }
        case "ADD_EVENT": {
            return [action.payload, ...state];
        }
        case "EDIT_EVENT": {
            return state.map((el) => el.id === action.payload.id ? action.payload : el);
          }
          case "DEL_EVENT": {
            const result = state.filter((el) => el.id !== action.payload);
            return result;
          }
        default: {
            return state;
        }
    }
}
