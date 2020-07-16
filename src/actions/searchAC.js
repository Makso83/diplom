import { SEARCH_BUTTON_PRESSED, SEARCH_FIELD_CHANGED } from "./action-types";

export const searchButtonPressed = () => ({
  type: SEARCH_BUTTON_PRESSED,
});

export const searchFieldChanged = (data) => ({
  type: SEARCH_FIELD_CHANGED,
  payload: data,
});

export const searchClearAC = () => ({
  type: SEARCH_FIELD_CHANGED,
})