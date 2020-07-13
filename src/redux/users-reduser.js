const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_COUNT = 'CHANGE_COUNT'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        id: userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        id: userId

    }
}
export const setUsersAC = (users, totalCount) => {
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


export default usersReducer;
