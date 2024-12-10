import axios from "axios";

// Base URL configuration
const API = axios.create({
  baseURL: "https://slot-selection.onrender.com", // Update if deploying to another domain
  withCredentials: true,  // Ensure credentials (cookies, authorization headers) are included
});

// Axios request interceptor for Authorization
API.interceptors.request.use(req => {
  const profile = localStorage.getItem("Profile") || localStorage.getItem("ProfileMentor");
  if (profile) {
    req.headers.Authorization = `Bearer ${JSON.parse(profile).token}`;
  }
  return req;
}, error => {
  console.error("Request error:", error);
  return Promise.reject(error);
});

// Export API calls
export const signup = authData => API.post("/user/signup", authData);
export const getallusers = () => API.get("/user/getallusers");
export const mentorsignup = authData => API.post("/mentor/mentorsignup", authData);
export const mentorlogin = authData => API.post("/mentor/mentorlogin", authData);
export const getallmentor = () => API.get("/mentor/getallmentor");
export const updateprofile = (id, updateData) => API.patch(`/user/update/${id}`, updateData);
export const joinBatch = (id, joinData) => API.patch(`/batches/${id}/join`, joinData);
export const postbatch = batchData => API.post("/batches/Add", batchData);
export const getallbatch = () => API.get("/batches/get");
export const deletebatch = id => API.delete(`/batches/delete/${id}`);
export const votebatch = (id, value) => API.patch(`/batches/vote/${id}`, { value });
export const postjoin = (id, noOfJoins, joinBody, userJoined) =>
  API.patch(`/join/post/${id}`, { noOfJoins, joinBody, userJoined });
export const deletejoin = (id, joinId, noOfJoins) =>
  API.patch(`/join/delete/${id}`, { joinId, noOfJoins });
