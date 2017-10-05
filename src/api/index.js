import axios from 'axios';

const ROOT_URL = 'https://api.github.com/users';

export const serchData = (action) => {
    if (action !== undefined) {
        return axios.get(`${ROOT_URL}/${action}`)
            .then(function (response) {
                return response.data;
            })
    }
};

export const getRepos = (action) => {
    //console.log(action);
    if (action !== undefined) {
        return axios.get(`${ROOT_URL}/${action}/repos`)
            .then(function (response) {
                return response.data;
            })
    }
};


