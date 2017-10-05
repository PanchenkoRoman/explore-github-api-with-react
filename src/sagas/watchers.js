import { takeEvery } from 'redux-saga/effects';
import { searchSaga } from './searchSaga';
import { handleSaga } from "./handleSaga";
import { branchesSaga } from './branchesSaga'
import * as types from '../constants/actionTypes';

export function* watchSearchMedia() {
    yield [
        takeEvery(types.GET_USER, searchSaga),
        takeEvery(types.SHOW_REPOS, handleSaga),
        takeEvery(types.SHOW_BRANCHES, branchesSaga)
    ]
}
