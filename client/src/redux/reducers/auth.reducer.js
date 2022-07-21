export function authReducer(state = false, action) {
    switch (action.type) {
        case "SET_AUTH":
            return action.payload;
        case "CHECK_AUTH":
            return action.payload;
        default:
            return state;
    }
}
