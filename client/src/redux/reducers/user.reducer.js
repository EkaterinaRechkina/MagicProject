export function userReducer(state = [], action) {
    switch (action.type) {
        case "USER_INFO":
            return action.payload;
        default:
            return state;
    }
}
