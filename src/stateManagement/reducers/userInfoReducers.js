import { ActionTypes } from './../constants/actionTypes';
const initialState = null

export const userInfoReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_USER_INFO:
            return state;
        default:
            return state;
    }

}