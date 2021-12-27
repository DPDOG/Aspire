import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducer/index';

const initialState = {};

function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware),
  );
  return store;
}
export const store = configureStore();
