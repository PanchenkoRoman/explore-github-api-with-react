import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getRepos } from '../api'

export function* handleSaga({login}) {
    try {
        //console.log(login);
        const repos = yield call(getRepos, login);
            yield put({ type: types.SHOW_REPOS_NEW, repos })
    } catch (error) {
        yield put({ type: types.SEARCH_MEDIA_ERROR, error });
    }
}