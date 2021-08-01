import { ActionTypes } from '../Constants/Action.type';
export const setPictures = (pictures) => {
    return {
        type: ActionTypes.SET_PICTURES,
        payload: pictures,
    }
}
export const setDifferents = (differents) => {
    return {
        type: ActionTypes.SET_DIFFERENTS,
        payload: differents,
    }
}

export const selectedPicture = (picture) => {
    return { 
        type: ActionTypes.SELECTED_PICTURE,
        payload: picture
    }
}

export const selectedDifferent = (different) => {
    return {
        type: ActionTypes.SELECTED_DIFFERENT,
        payload: different
    }
}

export const itemFound = (different) => {
return {
    type: ActionTypes.FOUND_ITEM,
    payload: different
}
}