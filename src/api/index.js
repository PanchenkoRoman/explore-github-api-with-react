import axios from 'axios';

const ROOT_URL = 'https://api.github.com/users';

export function serchData(login) {
    const request = axios.get(`${ROOT_URL}/${login}`);

    return{
        request.then((value) => value.data)
    }
}