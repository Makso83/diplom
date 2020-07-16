import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CLEAR } from '../actions/action-types';
import { getCartFromLocalStorage } from '../actions/cartAC'

const initialState = getCartFromLocalStorage();

export default (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const {
        title, id, size, quantity, price,
      } = action.payload;
      let isNew = true;
      const newState = state.map((item) => {
        if (item.id === id) {
          isNew = false;
          return { ...item, quantity: item.quantity + quantity };
        } return item;
      });
      return isNew ? [...newState, {
        title, id, size, quantity, price,
      }] : newState;
    }
    case CART_REMOVE_ITEM: {
      return state.filter((item) => item.id !== action.payload);
    }

    case CART_CLEAR: {
      return [];
    }
    default:
      return state;
  }
};
