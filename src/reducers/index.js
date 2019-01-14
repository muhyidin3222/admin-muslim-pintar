import { IDCATEGORY } from '../types';
import { combineReducers } from 'redux';

const initialState = {
    category: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case IDCATEGORY:
            return {
                category: action.payload,
            }
        default:
            return state;
    };
};

export default combineReducers({ userReducer });