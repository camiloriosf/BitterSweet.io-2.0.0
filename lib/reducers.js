import { CHANGE_QUOTE_ID, UPDATE_COMMENTS, UPDATE_NAME, UPDATE_EMAIL, CLEAR_FORM, UPDATE_PRICE } from './types';

export default {
  quote: (state = {}, { type, payload }) => {
    switch (type) {
      case CHANGE_QUOTE_ID:
        return { ...state, id: payload };
      case UPDATE_COMMENTS:
        return { ...state, comments: payload };
      case UPDATE_NAME:
        return { ...state, name: payload };
      case UPDATE_EMAIL:
        return { ...state, email: payload };
      case CLEAR_FORM:
        return { ...state, comments: '', name: '', email: '' };
      case UPDATE_PRICE:
        return { ...state, installments: payload.installments, payg: payload.payg, fee: payload.fee };
      default:
        return state;
    }
  },
};
