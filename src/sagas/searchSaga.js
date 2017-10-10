import { put, call } from 'redux-saga/effects';
import types from '../constants/actionTypes';
import { serchData } from '../api';

export default function* searchSaga({ payload }) {
  try {
    const user = yield call(serchData, payload);
    yield put({ type: types.GET_USER_NEW, user });
  } catch (error) {
    yield put({ type: types.SEARCH_MEDIA_ERROR, error });
  }
}
