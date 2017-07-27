import { CHANGE_QUOTE_ID, UPDATE_COMMENTS, UPDATE_NAME, UPDATE_EMAIL, CLEAR_FORM, UPDATE_PRICE } from '../types';
import calculator from '../../tools/calculator';

export function getQuote({ id = null }) {
  return function GetQuote(dispatch) {
    dispatch({ type: CHANGE_QUOTE_ID, payload: id });
  };
}

export function updateComments({ comments = '' }) {
  return function UpdateComments(dispatch) {
    dispatch({ type: UPDATE_COMMENTS, payload: comments });
  };
}

export function updateName({ name = '' }) {
  return function UpdateName(dispatch) {
    dispatch({ type: UPDATE_NAME, payload: name });
  };
}

export function updateEmail({ email = '' }) {
  return function UpdateEmail(dispatch) {
    dispatch({ type: UPDATE_EMAIL, payload: email });
  };
}

export function clearForm() {
  return function ClearForm(dispatch) {
    dispatch({ type: CLEAR_FORM });
  };
}

export function updatePrice(values) {
  return function UpdatePrice(dispatch) {
    dispatch(
      {
        type: UPDATE_PRICE,
        payload:
        {
          installments: calculator(values, 'installments'),
          payg: calculator(values, 'payg'),
          fee: calculator(values, 'fee'),
        },
      });
  };
}
