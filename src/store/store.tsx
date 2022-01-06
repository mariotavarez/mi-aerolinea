// Redux
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
// Redux Thunk
import thunk from "redux-thunk";
// Reducers
import {
  searchReducer,
  travelsReducer,
  shoppingCartReducer,
} from "../reducers";
// Redux DevTools Extension
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
// Create Combine reducers: Search Reducer
const reducers = combineReducers({
  searchAction: searchReducer,
  travelsAction: travelsReducer,
  shoppingCartAction: shoppingCartReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
