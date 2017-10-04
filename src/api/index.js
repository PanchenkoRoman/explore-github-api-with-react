import axios from 'axios';

const ROOT_URL = 'https://api.github.com/users';

export const serchData = (action) => {
    console.log(action);
    return axios.get(`${ROOT_URL}/${action}`)
    .then(function (response) {
        return response.data;
    })
};

