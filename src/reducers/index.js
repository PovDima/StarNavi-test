import { combineReducers } from 'redux';

import serverData from './serverData';
import game from './game'

export default combineReducers({
    serverData,
    game
});
