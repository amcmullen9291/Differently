import { combineReducers } from 'redux';
import { IndexReducer, PictureReducer,  DifferentIndexReducer, DifferentPictureReducer } from './PictureReducer';

const RootReducer = combineReducers({
    Index: IndexReducer,
    Original: PictureReducer,
    Differents: DifferentIndexReducer,
    Different: DifferentPictureReducer
});

export default RootReducer;