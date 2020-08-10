const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_COUNT = 'CHANGE_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
const TOOGLE_FOLLOW_IN_PROGRESS = 'TOOGLE_FOLLOW_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })

            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users],
                totalUsersCount: action.totalCount
            }
        }
        case CHANGE_COUNT: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case TOOGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOOGLE_FOLLOW_IN_PROGRESS:{
            return {
                ...state,
                followInProgress: action.followInProgress
                ? [...state.followInProgress,action.userId]
                : [...state.followInProgress.filter(id=>id!=action.userId)]
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        id: userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        id: userId

    }
}
export const setUsers = (users, totalCount) => {
    return {
        type: SET_USERS,
        users,
        totalCount,
    }
}
export const changeCount = (currentPage) => {
    return {
        type: CHANGE_COUNT,
        currentPage: currentPage
    }
}

export const setIsFetching = (isFetching) =>{
    return{
        type: TOOGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export const setFollowInProgress = (followInProgress,userId) =>{
    return{
        type: TOOGLE_FOLLOW_IN_PROGRESS,
        followInProgress,userId
    }
}


export default usersReducer;
