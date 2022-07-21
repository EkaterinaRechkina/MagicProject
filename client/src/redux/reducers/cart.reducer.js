export function cartReducer(state = [], action) {
    switch (action.type) {
        case "ADD_ITEM": {
            return [action.payload, ...state];
        }
          case "DEL_ITEM": {
            const result = state.filter((el) => el.id !== action.payload);
            return result;
          }
        default: {
            return state;
        }
    }
}
