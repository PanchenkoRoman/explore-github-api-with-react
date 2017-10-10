import { createTypes } from 'redux-action-creator';

const types = createTypes([
  'GET_USER',
  'SHOW_REPOS',
  'RETURN_INITIAL_STATE',
  'SHOW_BRANCHES',
  'GET_USER_NEW',
  'SEARCH_MEDIA_ERROR',
  'SHOW_REPOS_NEW',
  'GET_BRANCHES_NEW']);

export default types;
