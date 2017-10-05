import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getBranches } from '../api'

export function* branchesSaga({branchesUrl}) {
    try {
        const branches = yield call(getBranches, branchesUrl);
        yield put({ type: types.GET_BRANCHES_NEW, branches })
    } catch (error) {
        yield put({ type: types.SEARCH_MEDIA_ERROR, error });
    }
}