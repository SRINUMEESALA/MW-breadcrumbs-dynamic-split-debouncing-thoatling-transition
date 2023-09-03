import axios from "axios";
import { ActionTypes } from "../contants/ActionTypes";
import { apiStatusConstants } from "../../constants/constants";
export const GetUsers = () => async (dispatch) => {
  console.log("inside GetUsers function");
  dispatch({
    type: ActionTypes.SET_USERS,
    apiStatus: apiStatusConstants.load,
  });
  try {
    const users = await axios("https://jsonplaceholder.typicode.com/users");
    if (users.request.status === 200) {
      console.table(users.data);
      dispatch({
        type: ActionTypes.SET_USERS,
        data: users.data,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      dispatch({
        type: ActionTypes.SET_USERS,
        apiStatus: apiStatusConstants.fail,
      });
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.SET_USERS,
      apiStatus: apiStatusConstants.fail,
    });
  }
};

export const submitForm = () => async (dispatch) => {
  console.log("inside submitForm function");
  dispatch({
    type: ActionTypes.SUBMIT_FORM,
    apiStatus: apiStatusConstants.load,
  });
  try {
    const users = await axios.post(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (users.request.status === 201) {
      dispatch({
        type: ActionTypes.SUBMIT_FORM,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      dispatch({
        type: ActionTypes.SUBMIT_FORM,
        apiStatus: apiStatusConstants.fail,
      });
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.SUBMIT_FORM,
      apiStatus: apiStatusConstants.fail,
    });
  }
};
