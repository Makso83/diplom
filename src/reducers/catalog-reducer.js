import {
  CATEGORY_CHANGED,
  CATALOG_ITEMS_REQUEST,
  CATALOG_ITEMS_SUCCESS,
  CATALOG_RESET,
  CATALOG_OFFSET_INCREMENTED,
  CATALOG_SHOW_NO_MORE,
  CATALOG_GET_MORE,
  CATALOG_ITEMS_FAILURE,
} from '../actions/action-types';

const initialState = {
  items: [],
  currentCategory: 0,
  error: null,
  offset: 0,
  showNoMore: false,
  fetchingMore: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_CHANGED: {
      return { ...state, currentCategory: action.payload, showNoMore: false };
    }
    case CATALOG_ITEMS_REQUEST: {
      return { ...state, isFetching: true };
    }
    case CATALOG_ITEMS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        items: [...state.items, ...action.payload],
        fetchingMore: false,
      };
    }
    case CATALOG_ITEMS_FAILURE: {
      return { ...state, error: action.payload };
    }
    case CATALOG_RESET: {
      return {
        ...state, items: [], offset: 0, showNoMore: false,
      };
    }
    case CATALOG_OFFSET_INCREMENTED: {
      return { ...state, offset: state.offset + 1 };
    }
    case CATALOG_SHOW_NO_MORE: {
      return { ...state, showNoMore: true };
    }
    case CATALOG_GET_MORE: {
      return { ...state, fetchingMore: true };
    }
    default:
      return state;
  }
};
