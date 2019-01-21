import data from '../../components/wheels-list/data.js';

let ramen = {
    name: "Ramen",
    pic: require("../../assets/images/food/noodles.png")
}
let soba = {
    name: "Salad",
    pic: require("../../assets/images/food/salad.png")
}
let chickenRice = {
    name: "Chicken Rice",
    pic: require("../../assets/images/food/rice.png")
}
let sandwich = {
    name: "Sandwich",
    pic: require("../../assets/images/food/sandwich.png")
}
let bimbimbap = {
    name: "Bimbimbap",
    pic: require("../../assets/images/food/Bimbimbap.jpg")
}

const defaultState = {
    activeRoulette: {
        foodList: [
            ramen, soba, chickenRice, sandwich, bimbimbap
        ],
        wheelName: "The Best Wheel Ever",
        location: "The Terrace"
    },
    selectedWheel: {},
    initWheelsData: data
}

export const rouletteReducer = (state = defaultState, action) => {
    console.log('default test=', defaultState)
    switch (action.type) {

        case 'SET_ACTIVE_WHEEL':
            {
                console.log("action.payload = ", action.payload)
                let foodList = action.payload.wheelObj.data.map(stall => {
                    return stall.items.map(food => {return food})
                })
                if (foodList)
                    foodList = [].concat.apply([], foodList);
                let newPayload = {
                    wheelName: action.payload.wheelObj.name,
                    location: action.payload.location,
                    foodList
                }

                return {
                    ...state,
                    activeRoulette: newPayload
                }

            }

        case 'SAVE_WHEEL': 
        {
            let {payload} = action;
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
