import axios from '../axios';
import { SUCCESS_GET_SERVER_DATA } from './serverData';

export const SUCCESS_SET_WINNER = 'SUCCESS_SET_WINNER';
export const SET_FIELD = 'SET_FIELD';
export const SET_USER_FIELD = 'SET_USER_FIELD';
export const SET_COMPUTER_FIELD = 'SET_COMPUTER_FIELD';
export const START_AGAIN = 'START_AGAIN';

export function setWinner(data) {
  return async dispatch => {
    try {
      await axios.post(`/winners`, data);
      const [settingsData, winnersData] = await Promise.all([axios.get(`/game-settings`), axios.get(`/winners`)]);
      const gameWinner = data.winner

      dispatch({
        type: SUCCESS_GET_SERVER_DATA,
        winners: winnersData.data,
        settings: settingsData.data
      });

      dispatch({
        type: SUCCESS_SET_WINNER,
        gameWinner
      });
    } catch (error) {
      console.log(error)
    }
  };
}

export function setActiveField(id) {
  return async dispatch => {
    dispatch({
      type: SET_FIELD,
      id
    })
  }
}

export function setUserField(id) {
  return async dispatch => {
    dispatch({
      type: SET_USER_FIELD,
      id
    })
  }
}

export function setComputerField() {
  return async dispatch => {
    dispatch({
      type: SET_COMPUTER_FIELD
    })
  }
}

export function startAgain() {
  return async dispatch => {
    dispatch({
      type: START_AGAIN
    })
  }
}

