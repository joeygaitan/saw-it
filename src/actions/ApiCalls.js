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

export const increaseVote = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:8082/api/posts/votes/increase/${id}`)
        .then(response=>{
            console.log(response)
                dispatch(getPosts())
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

export const descreaseVote = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:8082/api/posts/votes/decrease/${id}`)
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

export const addComment = (body) => {
    return (dispatch) => {
        axios.post(`http://localhost:8082/api/comments`, body)
        .then(response=>{
            dispatch(getComments())
        })
        .catch(error=>{
            console.log(error);
        })
    }
}