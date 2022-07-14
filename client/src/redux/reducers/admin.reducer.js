export function adminReducer(state = false, action) {
    switch (action.type) {
        case "CHECK_ROLE":
            return action.payload;
        default:
            return state;
    }
}
