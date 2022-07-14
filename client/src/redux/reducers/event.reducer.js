export function eventReducer(state = [], action) {
    switch (action.type) {
        case "SET_EVENTS": {
            return action.payload;
        }
        case "ADD_EVENT": {
            return [action.payload, ...state];
        }
        default: {
            return state;
        }
    }
}
