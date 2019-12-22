import {
  SUCCESS_GET_SERVER_DATA
} from '../actions/serverData';

const initialState = {
  winners: [],
  settings: {}
};

export default function serverData(state = initialState, action) {
  const { type, winners, settings } = action;

  switch (type) {
    case SUCCESS_GET_SERVER_DATA:
      return { ...state, winners, settings };
    default:
      return state;
  }
}
