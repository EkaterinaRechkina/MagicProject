export function favoriteReducer(state = [], action) {
    switch (action.type) {
        case "GET_FAVORITE":
            return action.payload;
        case "ADD_FAVORITE": {
            return [action.payload, ...state];
        }
        case "DELETE_FAVORITE": {
            console.log('state =>', state);
            return state.filter(item => item.id !== action.payload);
        }
        default: {
            return state;
        }
    }
}
