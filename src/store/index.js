import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import saga from "./sagas";

export const types = {
  SEARCH_SET: "SEARCH_SET",
  USERS_LIST_LOAD: "USERS_LIST_LOAD",
  USERS_LIST_SET: "USERS_LIST_SET",
};

export const setSearchTerm = (searchTerm) => ({
  type: types.SEARCH_SET,
  payload: searchTerm,
});

export const loadUsersList = () => ({
  type: types.USERS_LIST_LOAD,
});

export const setUsersList = (usersList) => ({
  type: types.USERS_LIST_SET,
  payload: usersList,
});

export const actions = {
  loadUsersList,
  setSearchTerm,
  setUsersList,
};

export const initialState = {
  usersList: [],
  searchTerm: "",
};

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SEARCH_SET:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case types.USERS_LIST_SET:
      return {
        ...state,
        usersList: action.payload,
      };
    case types.USERS_LIST_LOAD:
      return state;
    default:
      return state;
  }
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(saga);

  return store;
};

export default configureStore;
