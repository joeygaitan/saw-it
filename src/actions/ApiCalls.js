import axios from 'axios';

//dispatch type so I don't miss spell any of them exported
export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';

export const GET_COMMENTS = ''

export const getPosts = () => {
    return (dispatch) => {
        axios.get('http://localhost:8082/api/posts')
        .then(response=>{
            dispatch({
                type: GET_POSTS,
                payload: response.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export const addPost = (body) => {
    return (dispatch) => {
        axios.post("http://localhost:8082/api/posts", body)
        .then(response=>{
            dispatch(getPosts())
        })
        .catch(error=>{
            console.log(error);
        })
    }
}

export const getComments = () => {
    return (dispatch) => {
        axios.get('http://localhost:8082/api/comments')
        .then(response=>{
            dispatch({ 
                type: GET_COMMENTS,
                payload: response.data
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }
}