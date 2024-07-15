import {combineReducers} from "redux"
import authreducer from "./auth"
import currentuserreducer from "./currentuser";
import usersreducer from "./users";
import batchreducer from "./batch";
import authmentorreducer from "./authmentor";
import currentmentorreducer from "./currentmentor";
import mentorreducer from "./mentor";

export default combineReducers({
    authreducer,
    currentuserreducer,
    usersreducer,
    batchreducer,
    authmentorreducer,
    currentmentorreducer,
    mentorreducer
});