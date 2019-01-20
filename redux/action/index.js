const SET_ACTIVE_WHEEL = 'SET_ACTIVE_WHEEL';

export const setActiveWheel = (obj) => {
    return {
        type: SET_ACTIVE_WHEEL,
        payload: obj
    }
}