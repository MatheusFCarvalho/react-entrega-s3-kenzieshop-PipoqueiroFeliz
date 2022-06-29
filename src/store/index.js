import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { reducerCart } from "./modules/cart/reducer";
import { reducerProducts } from "./modules/products/reducers";

const reducers = combineReducers({ cart: reducerCart, prods: reducerProducts });

export const store = createStore(reducers, applyMiddleware(thunk));
