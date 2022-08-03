import { ActionTypes } from '../constants/actionTypes';
export const getUserInfo = (token) => {
    return {
        type: ActionTypes.GET_USER_INFO,
        payload: token
    }
}