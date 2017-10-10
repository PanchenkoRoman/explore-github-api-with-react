import axios from 'axios';

const ROOT_URL = 'https://api.github.com/users';

export const serchData = action => axios.get(`${ROOT_URL}/${action.payload}`)
  .then(response => response.data);

export const getRepos = action => axios.get(`${ROOT_URL}/${action}/repos`)
  .then(response => response.data);

export const getBranches = (action) => {
  const num = action.indexOf('{');
  const url = action.substring(0, num);
  return axios.get(url)
    .then(response => response.data);
};

