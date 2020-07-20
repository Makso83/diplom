import { TOP_SALES_REQUEST, TOP_SALES_SUCCESS, TOP_SALES_FAILURE } from '../actions/action-types';

const initialState = {
  items: [],
  isFetching: false,
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case TOP_SALES_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case TOP_SALES_SUCCESS: {
      return {...state, isFetching: false, items: action.payload}
    }
    case TOP_SALES_FAILURE: {
      return {...state, isFetching: false, error: action.payload}
    }
    default:
      return state;
  }
};
