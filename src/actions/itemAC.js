import { ITEM_REQUEST, ITEM_SUCCESS, ITEM_FAILURE } from './action-types';

export const itemRequestAC = () => ({
  type: ITEM_REQUEST,
});

export const itemSuccessAC = (data) => ({
  type: ITEM_SUCCESS,
  payload: data,
});

export const itemErrorAC = (error) => ({
  type: ITEM_FAILURE,
  payload: error,
});
