export function adminReducer(state = false, action) {
    switch (action.type) {
        case "CHECK_ADMIN":
            return action.payload;
        default:
            return state;
    }
}
