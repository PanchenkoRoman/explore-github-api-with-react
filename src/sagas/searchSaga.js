import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import {serchData} from '../api'


// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* searchSaga({payload}) {
    try {
        const user = yield call(serchData, payload);
        if(user.login !== undefined){
            yield [
                put({ type: types.GET_USER, user }),
            ];
        }
    } catch (error) {
        yield put({ type: 'SEARCH_MEDIA_ERROR', error });
    }
}