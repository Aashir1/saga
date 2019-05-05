import types from "../../constant";
import initialState from "../../InitialState";
let counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case types.ASYNC_INCREMENT:
      return ++state;

    case types.DECREMENT:
      return --state;

    default:
      return state;
  }
};

export default counterReducer;
