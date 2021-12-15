import * as types from '../types';

const initialState = {
  user: {},
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CONTACT_REQUEEST: {
      const newState = { ...state };
      return newState;
    }
    case types.CONTACT_SUCCESS: {
      const newState = { ...state };
      return newState;
    }
    case types.CONTACT_FAILURE: {
      const newState = { ...state };
      return newState;
    }

    default: {
      return state;
    }
  }
}
