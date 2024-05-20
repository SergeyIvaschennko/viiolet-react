import { combineReducers } from 'redux';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
    player: playerReducer
    // Другие редюсеры, если есть
});

export default rootReducer;
