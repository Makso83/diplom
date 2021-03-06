import { topSalesRequestAC, topSalesSuccessAC, topSalesFailureAC } from '../actions/topSalesAC';
import { getCategoriesAC, categoriesSuccessAC, categoryFailureAC } from '../actions/categoriesAC';
import {
  getCatalogSuccess, getCatalogFailure, getCatalogAC, resetCatalog, showNoMore,
} from '../actions/catalogAC';
import { itemRequestAC, itemSuccessAC, itemErrorAC } from '../actions/itemAC';
import { orderSendAC, orderSuccessAC, orderFailureAC } from '../actions/orderAC';

const BASIC_URL = 'http://localhost:7070/api';

export const getTopSales = () => async (dispatch) => {
  dispatch(topSalesRequestAC());
  try {
    const response = await fetch(`${BASIC_URL}/top-sales`);
    if (!response.ok) {
      throw new Error('Ошибка получения данных.');
    }
    const data = await response.json();
    dispatch(topSalesSuccessAC(data));
  } catch (err) {
    dispatch(topSalesFailureAC(err));
  }
};

export const getCategories = () => async (dispatch) => {
  dispatch(getCategoriesAC());
  try {
    const response = await fetch(`${BASIC_URL}/categories`);
    if (!response.ok) {
      throw new Error('Ошибка получения данных.');
    }
    const data = await response.json();
    dispatch(categoriesSuccessAC(data));
  } catch (err) {
    dispatch(categoryFailureAC(err));
  }
};

export const getCatalogItems = (category, offset = 0, searchWord = '') => async (dispatch) => {
  let path = category === 0 ? `/items?offset=${offset * 6}` : `/items?categoryId=${category}&offset=${offset * 6}`;
  if (searchWord !== '' && searchWord !== 0) {
    path += `&q=${searchWord}`;
  }
  try {
    const response = await fetch(`${BASIC_URL}${path}`);
    if (!response.ok) {
      throw new Error('Ошибка получения данных.');
    }
    const data = await response.json();
    if (data.length < 6) dispatch(showNoMore());
    dispatch(getCatalogSuccess(data));
  } catch (err) {
    dispatch(getCatalogFailure(err));
  }
};

export const getCatalogItemBySearch = (category, searchWord) => async (dispatch) => {
  dispatch(getCatalogAC());
  dispatch(resetCatalog());
  dispatch(getCatalogItems(category, 0, searchWord));
};

export const getItemById = (id) => async (dispatch) => {
  dispatch(itemRequestAC());
  try {
    const response = await fetch(`${BASIC_URL}/items/${id}`);
    if (!response.ok) {
      throw new Error('Ошибка получения данных.');
    }
    const data = await response.json();
    dispatch(itemSuccessAC(data));
  } catch (err) {
    dispatch(itemErrorAC(err));
  }
};

export const sendOrder = (order) => async (dispatch) => {
  dispatch(orderSendAC());
  try {
    const response = await fetch(`${BASIC_URL}/order`, {
      method: 'POST',
      body: order,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Ошибка отправки данных.');
    }
    dispatch(orderSuccessAC());
  } catch (err) {
    dispatch(orderFailureAC(err));
  }
};
