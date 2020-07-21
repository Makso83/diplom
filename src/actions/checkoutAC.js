const { CHECKOUT_FIELD_CHANGED } = require("./action-types");

 export const checkoutFieldChangedAC = (name, value) => ({
  type: CHECKOUT_FIELD_CHANGED,
  payload: {name, value},
});