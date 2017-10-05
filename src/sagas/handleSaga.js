import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getRepos } from '../api'



export function* handleSaga({login}) {
    try {
        //console.log(login);
        const repos = yield call(getRepos, login);
        console.log(repos);
        if(repos.length !== undefined){
            yield put({ type: types.SHOW_REPOS, repos })
        }
    } catch (error) {
        yield put({ type: 'SEARCH_MEDIA_ERROR', error });
    }
}