import { ADD_MESSAGE,
        REQUEST_USERS,
        RECEIVE_USERS,
        SET_FETCHING_ERROR,
        RECEIVE_LOGIN_USER,
        REQUEST_LOGIN_USER,
        REMOVE_LOGIN_USER
} from "./actionTypes";

const addMessage = (user,text) => {
    let date = Date.now();
    return {type: ADD_MESSAGE,
            payload: { text: text,
                datetime: date,
                author: user.name,
                imgPath: user.imgPath,
                authorId: user.id,
            }
    }
}

const requestUsers = () => ({
    type: REQUEST_USERS
})

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    payload: users
})

const setFetchingError = (error) => ({
    type: SET_FETCHING_ERROR,
    payload: error
})

const requestLoginUser =() => ({
    type: REQUEST_LOGIN_USER
})

const receiveLoginUser =(user) => ({
    type: RECEIVE_LOGIN_USER,
    payload: user
})

const removeLoginUser = () => ({
    type: REMOVE_LOGIN_USER
})



export {addMessage,
        requestUsers,
        receiveUsers,
        setFetchingError,
        receiveLoginUser,
        requestLoginUser,
        removeLoginUser
}
