import { combineReducers } from 'redux';
import { filerReducer } from './filterReducer';
import productReducer from './productReducer';

export const rootReducer = combineReducers({
    product: productReducer,
    filter: filerReducer,
});

