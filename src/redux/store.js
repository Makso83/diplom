import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import topSalesReducer from '../reducers/top-sales-reducer';
import categoriesReducer from '../reducers/categories-reducer';
import catalogReducer from '../reducers/catalog-reducer';
import searchReducer from '../reducers/search-reducer';
import itemReducer from '../reducers/item-reducer';
import cartReducer from '../reducers/cart-reducer';

const reducers = combineReducers({
  topSales: topSalesReducer,
  categories: categoriesReducer,
  catalog: catalogReducer,
  searchStatus: searchReducer,
  item: itemReducer,
  cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk),
));

export default store;
