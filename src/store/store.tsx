// Redux
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
// Redux Thunk
import thunk from "redux-thunk";
// Reducers
import { searchReducer } from "../reducers/searchReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
// Create Combine reducers: Search Reducer
const reducers = combineReducers({ searchAction: searchReducer });

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
