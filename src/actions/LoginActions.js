export const LOGIN = 'LOGIN'; 

export const userLogin = (username, password) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN, payload: { username, password}
        })
    }
}

