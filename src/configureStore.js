import { applyMiddleware, compose, createStore } from "redux";

import { Map } from "immutable";
import callAPIMiddleware from "./callAPIMiddleware";
import rootReducer from "./reducers/";

// By exporting configureStore instead of just store, we will be able to create as many store instances as we want for testing.
const configureStore = () => {
  // for redux devtools: https://github.com/zalmoxisus/redux-devtools-extension#usage
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [callAPIMiddleware];
  const initialState = Map();
  const store = createStore(
    rootReducer,
    initialState,
    // persisted state goes here,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};

export default configureStore;
