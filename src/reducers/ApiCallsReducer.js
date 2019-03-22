import { combineReducers } from "redux";
import { GET_POSTS, ADD_POST } from '../actions/ApiCalls';
const initialState = {
    all: [],
    selected: {}
}

const posts = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS:
        return {...state, all: action.payload }
        default:
        return state
    }
}

export default combineReducers({ posts })