import { CHANGE_QUOTE_ID } from './types';

export default {
  quote: (state = {}, { type, payload }) => {
    switch (type) {
      case CHANGE_QUOTE_ID:
        return {
          ...state, id: payload,
        };
      default:
        return state;
    }
  },
};
