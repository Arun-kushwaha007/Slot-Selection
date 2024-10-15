const authmentorreducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "AUTHMENTOR":
            localStorage.setItem("ProfileMentor", JSON.stringify({ ...action?.data }));
            return { ...state, data: action?.data };
        case "LOGOUT":
            localStorage.clear();
            return { ...state, data: null }
        default:
            return state;
    }
};

export default authmentorreducer;