import { SEARCH_BUTTON_PRESSED, SEARCH_FIELD_CHANGED, SEARCH_CLEARED } from '../actions/action-types';

const initialState = {
  searchInvisible: true,
  searchWord: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BUTTON_PRESSED: {
      return { ...state, searchInvisible: !state.searchInvisible };
    }
    case SEARCH_FIELD_CHANGED: {
      return { ...state, searchWord: action.payload };
    }
    case SEARCH_CLEARED: {
      return {...state, searchWord: ''}
    }
    default:
      return state;
  }
};
