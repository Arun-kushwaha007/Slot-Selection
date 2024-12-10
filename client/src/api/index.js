import axios from "axios";

const API = axios.create({ baseURL: 
  // "http://localhost:5000" 
  "https://slot-selection-server.vercel.app"
});


API.interceptors.request.use((req) => {
  const profile = localStorage.getItem('Profile') || localStorage.getItem('ProfileMentor');
  if (profile) {
      req.headers.Authorization = `Bearer ${JSON.parse(profile).token}`;
  }
  return req;
});


// export const login = (authdata) => API.post("user/login", authdata);
export const signup = (authdata) => API.post("user/signup", authdata);
export const getallusers = () => API.get("/user/getallusers");

export const mentorsignup = (authData) => API.post('/mentor/mentorsignup', authData);
export const mentorlogin = (authData) => API.post('/mentor/mentorlogin', authData);
export const getallmentor = () => API.get("/mentor/getallmentor");

export const updateprofile = (id, updatedata) => API.patch(`user/update/${id}`, updatedata);
export const joinBatch = (id, joinData) => API.patch(`/batches/${id}/join`, joinData);

export const postbatch = (batchdata) => API.post("/batches/Add", batchdata);
export const getallbatch = () => API.get("/batches/get");
export const deletebatch = (id) => API.delete(`/batches/delete/${id}`);
export const votebatch = (id, value) => API.patch(`/batches/vote/${id}`, { value });

export const postjoin = (id, noofjoins, joinbody, userjoined) => API.patch(`/join/post/${id}`, { noofjoins, joinbody, userjoined });
export const deletejoin = (id, joinid, noofjoins) => API.patch(`/join/delete/${id}`, { joinid, noofjoins });
