import { CHANGE_QUOTE_ID, UPDATE_COMMENTS, UPDATE_NAME, UPDATE_EMAIL, CLEAR_FORM } from '../types';

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
    dispatch({ type: CLEAR_FORM});
  };
}

