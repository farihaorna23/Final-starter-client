import { FETCH_CAMPUS, EDIT_CAMPUS } from "../actions/actionTypes";


const initialState = {
  students: [],
};

const campus = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    case EDIT_CAMPUS:
      return action.payload;
    default:
      return state;
  }
};

export default campus;