import {combineReducers} from 'redux';
import {rouletteReducer} from './active-wheel.js';

const _reducers = {
    roulette: rouletteReducer
}
export const reducers = combineReducers(_reducers);
