import axios from 'axios';

const ROOT_URL = 'https://api.github.com/users';

export const serchData = (action) => {
    return axios.get(`${ROOT_URL}/${action}`)
        .then(function (response) {
            return response.data;
        })
};

export const getRepos = (action) => {
    return axios.get(`${ROOT_URL}/${action}/repos`)
        .then(function (response) {
            return response.data;
        });
};

export const getBranches = (action) => {
    let num = action.indexOf('{');
    let url = action.substring(0, num);
    return axios.get(url)
        .then(function (response) {
            return response.data;
        });
};


