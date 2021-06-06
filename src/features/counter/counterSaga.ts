import { delay, put, takeEvery } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction) {
//   console.log('Log', action);
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 1s');
  // Wait 1s
  yield delay(1000);

  console.log('Waiting done, dispatch action');

  // Dispatch action success
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('counter saga');

  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
