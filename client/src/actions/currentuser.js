export const setcurrentuser=(data)=>{
    return{
        type:"FETCH_CURRENT_USER",
        payload:data,
    };
};

export const setcurrentmentor=(data)=>{
    return{
        type:"FETCH_CURRENT_MENTOR",
        payload:data,
    };
};