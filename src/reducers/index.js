import { combineReducers } from 'redux';
import getDataReducer from './getDataReducer';
import { reducer as formReduser} from 'redux-form';

const rootReducer = combineReducers({
  data: getDataReducer,
  form: formReduser
});

export default rootReducer;
