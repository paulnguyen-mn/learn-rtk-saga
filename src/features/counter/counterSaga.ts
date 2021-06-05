import { takeEvery } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { increment } from './counterSlice';

export function* log(action: PayloadAction) {
  console.log('Log', action);
}

export default function* counterSaga() {
  console.log('counter saga');

  yield takeEvery(increment().type, log);
}
