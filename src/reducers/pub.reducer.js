import {
  ADD_PUB, SET_LOADING
} from "../constant/actionTypes";

const initial_state = {
  pubs: [],
  isLoading: false,
};

export default (state = initial_state, action) => {
  switch (action.type) {

    case ADD_PUB:
      console.log({ ...state, pubs: [...state.pubs, action.payload] });
      return { ...state, pubs: [...state.pubs, action.payload] };

    case SET_LOADING:
      return { ...state, isLoading: action.payload };

    default: return { ...state };
  }
}
