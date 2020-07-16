import { ITEM_REQUEST, ITEM_SUCCESS, ITEM_FAILURE } from '../actions/action-types';

const initialState = {
  item: {},
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEM_REQUEST: {
      return { ...state, isFetching: true, item: {}, };
    }
    case ITEM_SUCCESS: {
      return {
        ...state, isFetching: false, item: action.payload, error: null,
      };
    }
    case ITEM_FAILURE: {
      return {
        ...state, isFetching: false, item: {}, error: action.payload,
      };
    }
    default:
      return state;
  }
};
