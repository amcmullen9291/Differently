import { ActionTypes } from '../Constants/Action.type';

const initialState = {
    pictures: [],
};

export const IndexReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PICTURES:
            return { ...state, pictures: payload};
        default:
            return state
    }
};

export const PictureReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PICTURE:
            return { ...state, ...payload};
        default:
            return state;
    }
}

export const DifferentIndexReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_DIFFERENTS:
            return { ...state, differents: payload};
        default:
            return state
    }
};

export const DifferentPictureReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_DIFFERENT:
            return { ...state, ...payload};
        default:
            return state;
    }
}

export const DifferentItemFoundReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.FOUND_ITEM:
            return { ...state, ...payload};
        default:
            return state;
    }
}