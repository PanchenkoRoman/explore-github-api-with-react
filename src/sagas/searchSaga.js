import { put, call } from 'redux-saga/effects';
import { fetchData, showBranches } from '../actions';
import * as types from '../constants/actionTypes';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export default function* searchSaga({ payload }) {
    try {
        console.log(payload.then((value) => console.log(value)));
        const user = yield call(fetchData, payload);
        const branches = yield call(showBranches, payload);
        yield [
            put({ type: types.GET_USER, user }),
            put({ type: types.SHOW_BRANCHES, branches }),
        ];
    } catch (error) {
        yield put({ type: 'SEARCH_MEDIA_ERROR', error });
    }
}