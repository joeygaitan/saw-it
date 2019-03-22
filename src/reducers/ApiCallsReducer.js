import { combineReducers } from "redux";
import { GET_POSTS, ADD_POST, GET_COMMENTS } from '../actions/ApiCalls';
const initialState = {
    all: [],
    allComments: [],
}

const posts = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS:
        return {...state, all: action.payload }
        default:
        return state
    }
}

const comments = (state = initialState, action)=> {
    switch(action.type){
        case GET_COMMENTS:
        return {...state, allComments: action.payload }
        default:
        return state
    }
}

export default combineReducers({ posts, comments })