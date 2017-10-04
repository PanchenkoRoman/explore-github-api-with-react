import { takeLatest } from 'redux-saga/effects';
import { searchSaga } from './searchSaga';
import * as types from '../constants/actionTypes';

export default function* watchSearchMedia() {
    yield takeLatest(types.GET_USER, searchSaga);
}