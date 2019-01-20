const defaultState = {
    activeRoulette: {},
    selectedWheel: {}
}

export const rouletteReducer = (state = defaultState, action) => {
    console.log('default test=', defaultState)
  switch (action.type) {
    case 'SET_ACTIVE_WHEEL': {
        console.log("action.payload = ", action.payload)
        let foodItems = action.payload.wheelObj.data.map( stall => {
            return stall.items.map( food => food)
        })
        let newPayload = {
            wheelName: action.payload.wheelObj.name,
            location: action.payload.location,
            foodItems
        }
        
        return {
            ...state,
            activeRoulette: newPayload
        }

    }
    default:
        return state;
    }
};
