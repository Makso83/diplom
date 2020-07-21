import { CHECKOUT_FIELD_CHANGED } from '../actions/action-types';

const initialState = {
  phone: '',
  address: '',
  agreement: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_FIELD_CHANGED: {
      return { ...state, [action.payload.name]: action.payload.value };
    }
    default:
      return state;
  }
};
