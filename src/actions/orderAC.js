const { ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAILURE, ORDER_CLEAR } = require('./action-types');

export const orderSendAC = () => ({
  type: ORDER_REQUEST,
});

export const orderSuccessAC = () => ({
  type: ORDER_SUCCESS,
});

export const orderFailureAC = (error) => ({
  type: ORDER_FAILURE,
  payload: error,
});

export const orderClearAC = () => ({
  type: ORDER_CLEAR,
})
