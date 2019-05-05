import { takeEvery, put, delay } from "redux-saga/effects";
// import { delay } from "redux-saga";
import types from "../constant";

export function* watchAsyncIncrement() {
  yield takeEvery(types.INCREMENT, asyncIncrement);
}

function* asyncIncrement() {
  yield delay(3000);
  yield put({ type: types.ASYNC_INCREMENT });
}
