import {PAYMENTS} from '../action/actionTypes';

const initState = {
  limit: {
    totalLimit: 10000,
    addedLimit: 0,
    balanceLimit: 10000,
  },
  card: {
    cardName: 'Mark Henry',
    cardNumber: '1234123412342020',
    cardThru: '12/20',
    cardCvv: '123',
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case PAYMENTS.ADD_LIMIT:
      return {...state, limit: action.payload};
    default:
      return state;
  }
};
