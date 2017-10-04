import axios from 'axios';
import { GET_USER, SHOW_REPOS, RETURN_INITIAL_STATE, SHOW_BRANCHES } from '../constants/actionTypes';

const ROOT_URL = 'https://api.github.com/users';

export function fetchData(payload) {
//    const request = axios.get(`${ROOT_URL}/${login}`)
console.log(payload);
    return{
        type: GET_USER,
        payload
    }
}

export function selectUser(login) {
    const request = axios.get(`${ROOT_URL}/${login}/repos`);

    return {
        type: SHOW_REPOS,
        payload: request
    }
}

export function showBranches(branchesUrl) {
    let num = branchesUrl.indexOf('{');
    let url = branchesUrl.substring(0, num);
    const request = axios.get(url);

    return{
        type: SHOW_BRANCHES,
        payload: request
    }
}

export function initialState() {
    return{
        type: RETURN_INITIAL_STATE
    }
}