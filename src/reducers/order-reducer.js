import {
  ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAILURE, ORDER_CLEAR,
} from '../actions/action-types';

const initialState = {
  isFetchingOrder: false,
  orderSuccess: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ORDER_REQUEST: {
      return { ...state, isFetchingOrder: true };
    }
    case ORDER_SUCCESS: {
      return { ...state, isFetchingOrder: false, orderSuccess: true };
    }
    case ORDER_FAILURE: {
      return { ...state, error: action.payload };
    }
    case ORDER_CLEAR: {
      return { ...initialState };
    }
    default:
      return state;
  }
};
