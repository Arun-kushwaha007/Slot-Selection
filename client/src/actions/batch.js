import * as api from '../api';

export const addbatch = (batchdata, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postbatch(batchdata);
        dispatch({ type: "POST_BATCH", payload: data });
        dispatch(fetchallbatch());
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

export const fetchallbatch = () => async (dispatch) => {
    try {
        const { data } = await api.getallbatch();
        dispatch({ type: "FETCH_ALL_BATCHES", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deletebatch = (id, navigate) => async (dispatch) => {
    try {
        await api.deletebatch(id);
        dispatch(fetchallbatch());
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

export const votebatch = (id, value) => async (dispatch) => {
    try {
        await api.votebatch(id, value);
        dispatch(fetchallbatch());
    } catch (error) {
        console.log(error);
    }
};

export const postjoin = (id, userid, userjoined, navigate) => async (dispatch) => {
    try {
        const { data } = await api.joinBatch(id, { userid, userjoined });
        dispatch({ type: "UPDATE_BATCH", payload: data });
        dispatch(fetchallbatch());
        navigate(`/batch/${id}`); // Redirect to batch details page
    } catch (error) {
        console.log(error);
    }
};

export const deletejoin = (id, joinid, noofjoins) => async (dispatch) => {
    try {
        await api.deletejoin(id, joinid, noofjoins);
        dispatch(fetchallbatch());
    } catch (error) {
        console.log(error);
    }
};
