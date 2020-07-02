import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import categoriesReducer from "./categories";
import itemsReducer from "./items";
import cartReducer from "./cart";

const reducer = combineReducers({
  categories: categoriesReducer,
  items: itemsReducer,
  cart: cartReducer
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
