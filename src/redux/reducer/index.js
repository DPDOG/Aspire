import {combineReducers} from 'redux';
import commonReducer from './commonReducer';

const appReducer = combineReducers({
  common: commonReducer,
});

// eslint-disable-next-line no-undef
export default rootReducer = (state, action) => {
  return appReducer(state, action);
};
