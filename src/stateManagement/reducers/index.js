import { combineReducers } from "redux";
import { userInfoReducers } from './userInfoReducers';
const reducers = combineReducers({
    userInfo: userInfoReducers,
})
export default reducers;