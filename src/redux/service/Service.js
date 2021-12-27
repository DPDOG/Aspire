import {PAYMENTS} from '../action/actionTypes';

export const saveLimit = (dispatch, response) => {
  dispatch({
    type: PAYMENTS.ADD_LIMIT,
    payload: response,
  });
  return true;
};
