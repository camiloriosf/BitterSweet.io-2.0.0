import { CHANGE_QUOTE_ID, UPDATE_VALUE, CLEAR_FORM, UPDATE_PRICE } from './types';
import initState from './initState';

export default {
  quote: (state = {}, { type, payload }) => {
    switch (type) {
      case CHANGE_QUOTE_ID:
        return { ...state, id: payload };
      case UPDATE_VALUE:
        return { ...state, ...payload };
      case CLEAR_FORM:
        return { ...state, ...initState.quote };
      case UPDATE_PRICE:
        return { ...state, ...payload };
      default:
        return state;
    }
  },
};
