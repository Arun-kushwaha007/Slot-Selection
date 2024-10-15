const currentmentorreducer = (state = null, action) => {
    switch (action.type) {
        case "FETCH_CURRENT_MENTOR":
            return action.payload;
            case "LOGOUT":
                return null;
            default:
                return state;
    }
};

export default currentmentorreducer;