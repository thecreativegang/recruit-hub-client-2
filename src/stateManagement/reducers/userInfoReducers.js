import { ActionTypes } from './../constants/actionTypes';
const initialState = {
    user: [{
        email: "jahidhassan.programmer@gmail.com",
        username: "jahid2424",
        accountType: "developer",
        registrationDate: "02 Aug, 2022"
    }]
}
export const userInfoReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_USER_INFO:
            return state
        default:
            break;
    }

}