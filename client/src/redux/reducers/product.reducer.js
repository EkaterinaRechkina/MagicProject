export function productReducer(state = [], action) {
    switch (action.type) {
        case "GET_PRODUCT":
            return state;
        case "ADD_PRODUCT": {
            return [action.payload, ...state];
        }
        case "EDIT_PRODUCT": {
            return state.map(item =>
                (item.id == action.payload.id) ? action.payload : item
            );
        }
        case "DELETE_PRODUCT": {
            return state.filter(item => item.id !== action.payload);
        }
        default: {
            return state;
        }
    }
}
