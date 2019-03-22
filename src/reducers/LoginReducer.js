import { combineReducers } from "redux";
import { LOGIN } from '../actions/LoginActions'

const INTIAL_STATE = [{ADMIN: false},{USER: false},{username:''}]

const login = (state = INTIAL_STATE, action) =>{
    if(action.payload.username=== 'admin' && action.payload.password==='123'){
        return [{ADMIN: true},{USER: false},{username:action.payload.username}]
    }else {
        [{ADMIN: false},{USER: true},{username: action.payload.username}]
    }
}

export default combineReducers({ login })