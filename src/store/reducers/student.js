import { FETCH_STUDENT, EDIT_STUDENT } from "../actions/actionTypes";

const initialState = {
  campus: {},
};

// REDUCER;
const student = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload;
    case EDIT_STUDENT:
      return action.payload;
    default:
      return state;
  }
};

export default student;