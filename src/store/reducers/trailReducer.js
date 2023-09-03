import { ActionTypes } from "../contants/ActionTypes";

const initialState = {
  count: 0,
};

const trailReducer = (state = initialState, action) => {
  let updatedState = state;
  let { count } = updatedState;
  switch (action.type) {
    case ActionTypes.COUNT:
      count += 1;
      break;

    default:
      break;
  }
  return { ...updatedState, count };
};

export default trailReducer;
