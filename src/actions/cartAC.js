import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CLEAR } from './action-types';

export const addItemToCartAC = (title, id, size, quantity, price) => ({
  type: CART_ADD_ITEM,
  payload: {
    title, id, size, quantity, price,
  },
});

export const removeItemFromCartAC = (sku) => ({
  type: CART_REMOVE_ITEM,
  payload: sku,
});

export const clearCartAC = () => ({
  type: CART_CLEAR,
});

export const addCartToLocalStorage = (cart) => {
  localStorage.setItem('cartStorage', JSON.stringify(cart));
};

export const getCartFromLocalStorage = () => {
  const result = JSON.parse(localStorage.getItem('cartStorage'));
  return result === null ? [] : result;
};

export const clearLocalStorage = () => {
  localStorage.removeItem('cartStorage');
};
