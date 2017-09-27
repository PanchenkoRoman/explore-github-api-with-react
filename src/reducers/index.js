import { combineReducers } from 'redux';
import GetDataReducer from './reducerGetData';
import { reducer as formReduser} from 'redux-form';

const rootReducer = combineReducers({
  data: GetDataReducer,
  form: formReduser
});

export default rootReducer;
