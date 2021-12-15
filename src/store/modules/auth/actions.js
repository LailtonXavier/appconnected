import * as types from '../types';

export function contactRequest(payload) {
  return {
    type: types.CONTACT_REQUEEST,
    payload,
  };
}

export function contactSuccess(payload) {
  return {
    type: types.CONTACT_SUCCESS,
    payload,
  };
}

export function contactFailure(payload) {
  return {
    type: types.CONTACT_FAILURE,
    payload,
  };
}
