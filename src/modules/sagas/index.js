// api/index.js
import { all, fork } from "redux-saga/effects";

import userSaga from "./user";
import certSaga from "./cert";
import mainCertSaga from "./mainCert";

export default function* rootSaga() {
  yield all([fork(userSaga), certSaga(), mainCertSaga()]);
}