import data from '../../components/wheels-list/data.js';

const defaultState = {
    activeRoulette: {},
    selectedWheel: {},
    initWheelsData: data
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

    case 'SAVE_WHEEL': {
        let {payload} = action;
        console.log("initwheelsdata = ", state.initWheelData)
        newInitWheelsData = state.initWheelsData.map(
            location => {
                if(location.title == payload.title) {
                    return {
                        title: location.title,
                        data: location.data.map(
                            (stall, i) => {
                                if(stall.stall == payload.wheelObj.data[i].stall) {
                                    return {
                                        ...payload.wheelObj.data[i]
                                    }
                                } else {
                                    return stall;
                                }
                            }
                        )
                    }
                } else {
                    return {
                        ...location
                    }
                }
            }
        )

        console.log('newInitWheelsData =', newInitWheelsData)
        // return {
        //     ...state,
        //     initWheelsData:
        // }
    }
    default:
        return state;
    }
};
