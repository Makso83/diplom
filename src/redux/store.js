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

const reducers = combineReducers({
  topSales: topSalesReducer,
  categories: categoriesReducer,
  catalog: catalogReducer,
  searchStatus: searchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk),
));

export default store;
