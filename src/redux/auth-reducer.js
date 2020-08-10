const SET_USER_DATA = 'SET_USER_DATA'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialStore = {
    isFetching: false,
    userId: null,
    email: null,
    login: null,
    isLog: false

}

const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isLog: true
            }
        }
        case SET_IS_FETCHING: {
            return{
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}


export const setUserData = (userId,email,login) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
}

export const setIsFetching = (isFetching) =>{
    return{
        type: SET_IS_FETCHING,
        isFetching: isFetching
    }
}
export default authReducer;