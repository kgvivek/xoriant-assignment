import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { actions, types } from "./index";

function* loadUsersListWorker() {
  const response = yield axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  try {
    if (response.status === 200) {
      yield put(actions.setUsersList(response.data));
    }
  } catch {
    alert("Something went wrong");
  }
}

export const workers = {
  loadUsersListWorker,
};

function* saga() {
  yield takeLatest(types.USERS_LIST_LOAD, loadUsersListWorker);
}

export default saga;
