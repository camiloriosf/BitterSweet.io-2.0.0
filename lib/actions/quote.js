import { CHANGE_QUOTE_ID } from '../types';

export function getQuote({ id = null }) {
  return function GetQuote(dispatch) {
    dispatch({ type: CHANGE_QUOTE_ID, payload: id });
  };
}
