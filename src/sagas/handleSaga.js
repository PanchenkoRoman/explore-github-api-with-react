import { put, call } from 'redux-saga/effects';
import types from '../constants/actionTypes';
import { getRepos } from '../api';

export default function* handleSaga({ payload }) {
  try {
    const repos = yield call(getRepos, payload.login);
    yield put({ type: types.SHOW_REPOS_NEW, repos });
  } catch (error) {
    yield put({ type: types.SEARCH_MEDIA_ERROR, error });
  }
}
