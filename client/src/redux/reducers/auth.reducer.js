export function authReducer(state = false, action) {
    switch (action.type) {
        case "CHECK_AUTH":
            return action.payload;
        case "CHECK_ADMIN":
            return state;
        default:
            return state;
    }
}
