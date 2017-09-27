import axios from 'axios';
import {GET_USER, SHOW_REPOS, RETURN_INITIAL_STATE} from '../constants/actionTypes';

const ROOT_URL = 'https://api.github.com/users';


export function fetchData(login) {
    const request = axios.get(`${ROOT_URL}/${login}`);

    return{
        type: GET_USER,
        payload: request
    }
}

export function selectUser(login) {
    const request = axios.get(`${ROOT_URL}/${login}/repos`);

    return{
        type: SHOW_REPOS,
        payload: request
    }
}

export function initialState() {
    return{
        type: RETURN_INITIAL_STATE
    }
}