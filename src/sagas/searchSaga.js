import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { serchData } from '../api'



export function* searchSaga({payload}) {
    try {
        //console.log(payload);
        const user = yield call(serchData, payload);
            yield put({ type: 'GET_USER_NEW', user })
    } catch (error) {
        yield put({ type: 'SEARCH_MEDIA_ERROR', error });
    }
}