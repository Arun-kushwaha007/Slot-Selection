const mentorsreducer =(states=[],action)=>{
    switch (action.type) {
        case "FETCH_MENTORS":
            return action.payload;
        case "UPDATE_CURRENT_MENTOR":
            return states.map((state)=>
            state._id=== action.payload._id ? action.payload:state);
        default:
            return states;
    }
}
export default mentorsreducer;