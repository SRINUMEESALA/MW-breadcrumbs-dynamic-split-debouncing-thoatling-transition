import { apiStatusConstants } from "../../constants/constants";
import { ActionTypes } from "../contants/ActionTypes";
const initialState = {
  formSubmissionApiStatus: "initial",
  users: [],
  usersAPIstatus: apiStatusConstants.initial,
  prevFactorialValues: [],
};
const reducer = (state = initialState, action) => {
  let updatedState = state;
  let { formSubmissionApiStatus, usersAPIstatus, users } = updatedState;
  // console.log(action);
  const { type, data, apiStatus } = action;
  switch (type) {
    case ActionTypes.SUBMIT_FORM:
      formSubmissionApiStatus = apiStatus;
      break;
    case ActionTypes.SET_USERS:
      users = data;
      usersAPIstatus = apiStatus;
      break;
    default:
      break;
  }
  // console.log("In Store", updatedState);
  return { ...updatedState, formSubmissionApiStatus, usersAPIstatus, users };
};

export default reducer;
