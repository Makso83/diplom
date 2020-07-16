import { TOP_SALES_REQUEST, TOP_SALES_SUCCESS, TOP_SALES_FAILURE } from "./action-types";

export const topSalesRequestAC = () => ({
  type: TOP_SALES_REQUEST,
});

export const topSalesSuccessAC = (data) => ({
  type: TOP_SALES_SUCCESS,
  payload: data,
});

export const topSalesFailureAC = (error) => ({
  type: TOP_SALES_FAILURE,
  payload: error,
});
