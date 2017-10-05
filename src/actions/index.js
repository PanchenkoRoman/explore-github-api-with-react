import * as types from '../constants/actionTypes';

export function fetchData(payload) {
    return{
        type: types.GET_USER,
        payload
    }
}

export function selectUser(login) {
    return {
        type: types.SHOW_REPOS,
        login
    }
}

export function showBranches(branchesUrl) {
    return{
        type: types.SHOW_BRANCHES,
        branchesUrl
    }
}

export function initialState() {
    return{
        type: types.RETURN_INITIAL_STATE
    }
}