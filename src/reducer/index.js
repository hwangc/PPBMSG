import { combineReducers } from 'redux';
import { types, initialStateOrder, initialStateMap } from '../constant';

export const ppbMsgOrder = (state = initialStateOrder, action) => {
  switch (action.type) {
    case types.SUCCESS_FETCH_ORDER:
      return {
        ...action.payload
      };

    case types.FAIL_FETCH_ORDER:
      return {
        ...action.payload
      };

    default:
      return state;
  }
};

export const ppbMsgMap = (state = initialStateMap, action) => {
  switch (action.type) {
    case types.SUCCESS_FETCH_LOC:
      return {
        ...action.payload
      };

    case types.FAIL_FETCH_LOC:
      return {
        ...action.payload
      };

    default:
      return state;
  }
};
const rootReducer = combineReducers({ ppbMsgOrder, ppbMsgMap });
export default rootReducer;
