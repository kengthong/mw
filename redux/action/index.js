const SET_ACTIVE_WHEEL = 'SET_ACTIVE_WHEEL';
const SAVE_WHEEL = "SAVE_WHEEL";

export const setActiveWheel = (obj) => {
    return {
        type: SET_ACTIVE_WHEEL,
        payload: obj
    }
}

export const saveWheel = (obj) => {
    return {
        type: SAVE_WHEEL,
        payload: obj
    }
}