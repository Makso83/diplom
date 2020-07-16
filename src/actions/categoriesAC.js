import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from "./action-types";

export const getCategoriesAC = () => ({
  type: CATEGORIES_REQUEST,
});

export const categoriesSuccessAC = (data) => ({
  type: CATEGORIES_SUCCESS,
  payload: data,
});

export const categoryFailureAC = (error) => ({
  type: CATEGORIES_FAILURE,
  payload: error,
});