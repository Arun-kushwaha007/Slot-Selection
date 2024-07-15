const batchreducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "POST_BATCH":
            return { ...state, data: [...state.data, action.payload] };
        case "FETCH_ALL_BATCHES":
            return { ...state, data: action.payload };
        case "POST_ANSWER":
            return { ...state };
        default:
            return state;
    }
};

export default batchreducer;
