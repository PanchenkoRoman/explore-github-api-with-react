import { put, call } from 'redux-saga/effects';
import types from '../constants/actionTypes';
import { getBranches } from '../api';

export default function* branchesSaga({ payload }) {
  try {
    const branches = yield call(getBranches, payload.branchesUrl);
    yield put({ type: types.GET_BRANCHES_NEW, branches });
  } catch (error) {
    yield put({ type: types.SEARCH_MEDIA_ERROR, error });
  }
}
