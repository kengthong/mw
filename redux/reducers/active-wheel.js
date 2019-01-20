import {TEST_ACTION} from '../action/index';

const defaultState = {
    selectedWheel: 'hi'
}

export const rouletteReducer = (state = defaultState, action) => {
    console.log('default test=', defaultState)
  switch (action.type) {
    case TEST_ACTION: {
        return action.payload;
    }
    default:
        return state;
    }
};
