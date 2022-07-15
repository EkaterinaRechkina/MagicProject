export function adminReducer(state = false, action) {
    switch (action.type) {
        case "SET_ADMIN":
            return action.payload;
        case "CHECK_ROLE":
            return action.payload;
        default:
            return state;
    }
}
