import { actionCreator } from 'redux-action-creator';
import types from '../constants/actionTypes';

export const fetchData = actionCreator(types.GET_USER, 'payload');

export const selectUser = actionCreator(types.SHOW_REPOS, 'login');

export const showBranches = actionCreator(types.SHOW_BRANCHES, 'branchesUrl');

export const initialState = actionCreator(types.RETURN_INITIAL_STATE);