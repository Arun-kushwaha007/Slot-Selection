import * as api from '../api';
import { setcurrentmentor } from './currentuser';
import { fetchallmentor } from './users';
export const Mentorsignup =(authdata,naviagte)=> async(dispatch)=>{
    try {
        const{data}=await api.mentorsignup(authdata);
        dispatch({type:"AUTHMENTOR",data})
        dispatch(setcurrentmentor(JSON.parse(localStorage.getItem("ProfileMentor"))));
        dispatch(fetchallmentor())
        naviagte("/")
    } catch (error) {
        console.log(error)
    }
}
export const Mentorlogin =(authdata,naviagte)=> async(dispatch)=>{
    try {
        const{data}=await api.mentorlogin(authdata);
        dispatch({type:"AUTHMENTOR",data})
        dispatch(setcurrentmentor(JSON.parse(localStorage.getItem("ProfileMentor"))));
        naviagte("/")
    } catch (error) {
        console.log(error)
    }
}