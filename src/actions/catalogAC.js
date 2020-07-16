import {
  CATEGORY_CHANGED,
  CATALOG_ITEMS_REQUEST,
  CATALOG_ITEMS_SUCCESS,
  CATALOG_ITEMS_FAILURE,
  CATALOG_RESET,
  CATALOG_GET_MORE,
  CATALOG_SHOW_NO_MORE,
  CATALOG_OFFSET_INCREMENTED,
} from './action-types';

export const categoryChandegAC = (categoryId) => ({
  type: CATEGORY_CHANGED,
  payload: categoryId,
});

export const getCatalogAC = () => ({
  type: CATALOG_ITEMS_REQUEST,
});

export const getCatalogSuccess = (data) => ({
  type: CATALOG_ITEMS_SUCCESS,
  payload: data,
});

export const getCatalogFailure = (error) => ({
  type: CATALOG_ITEMS_FAILURE,
  payload: error,
});

export const resetCatalog = () => ({
  type: CATALOG_RESET,
});

export const catalogGetMoreAC = () => ({
  type: CATALOG_GET_MORE,
});

export const showNoMore = () => ({
  type: CATALOG_SHOW_NO_MORE,
});

export const incrementOffset = () => ({
  type: CATALOG_OFFSET_INCREMENTED,
});
