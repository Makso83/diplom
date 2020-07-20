import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from "../actions/action-types";

const initialState = {
  items: [{ id: 0, title: 'Все' }],
  error: null,
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST: {
      return {...state, isFetching: true, error: null}
    }
    case CATEGORIES_SUCCESS: {
      return {...state, isFetching: false, items: [...initialState.items, ...action.payload]}
    }
    case CATEGORIES_FAILURE: {
      return {...state, isFetching: false, error: action.payload}
    }
    default:
      return state;
  }
};
