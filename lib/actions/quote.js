import { CHANGE_QUOTE_ID, UPDATE_VALUE, CLEAR_FORM, UPDATE_PRICE } from '../types';
import calculator from '../../tools/calculator';

export function getQuote({ id = null }) {
  return function GetQuote(dispatch) {
    dispatch({ type: CHANGE_QUOTE_ID, payload: id });
  };
}

export function updateValue({ value }) {
  return function UpdateValue(dispatch, getState) {
    dispatch({ type: UPDATE_VALUE, payload: value });
    dispatch(
      {
        type: UPDATE_PRICE,
        payload:
        {
          prices:
          {
            installments: calculator(getState().quote, 'installments'),
            payg: calculator(getState().quote, 'payg'),
            fee: calculator(getState().quote, 'fee'),
          },
        },
      });
  };
}

export function clearForm() {
  return function ClearForm(dispatch) {
    dispatch({ type: CLEAR_FORM });
  };
}
