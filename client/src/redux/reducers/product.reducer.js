export function productReducer(state = [], action) {
    switch (action.type) {
        case "GET_PRODUCT":
            return state;
        case "ADD_PRODUCT": {
            return [action.payload, ...state];
        }
        default: {
            return state;
        }
    }
}
