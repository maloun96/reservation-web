
import {
  ADD_PUB, LIST_PUBS, SET_LOADING
} from '../constant/actionTypes';

export const savePub = (pub) => dispatch => {
  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(addPub(pub));
    dispatch(setLoading(false));
  }, 2000);
};

export const addPub = (pub) => ({
  type: ADD_PUB,
  payload: pub
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
});

export const listPubs = (pub) => ({
  type: LIST_PUBS,
});
