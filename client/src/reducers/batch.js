const batchreducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "POST_BATCH":
            return { ...state, data: [...state.data, action.payload] };
        case "FETCH_ALL_BATCHES":
            return { ...state, data: action.payload };
        case "UPDATE_BATCH":
            return {
                ...state,
                data: state.data.map((batch) =>
                    batch._id === action.payload._id ? action.payload : batch
                ),
            };
        default:
            return state;
    }
};

export default batchreducer;
