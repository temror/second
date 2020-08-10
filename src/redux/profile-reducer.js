const SEND_POST = 'SEND-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialStore = {
    person: [
        {
            avatar: 'https://i.pinimg.com/originals/71/c0/87/71c0873306c23451ab6f76b9337d6a40.jpg',
            surname: 'Дунаева',
            name: 'Олеся',
            age: "18",
            male: "Женский",
            city: "Москва"
        },
    ],
    posts: [
        {text: "Я помню чудное мгновенье...", likesCount: 12}
    ],
    postText: '',
    isFetching: false,
    profile: {photos:{},contacts:{}}
}

const profileReducer = (state = initialStore, action) => {

    switch (action.type) {
        case SEND_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        text: action.textPost,
                        likesCount: 12
                    }
                ],
                postText: ''
            }
        }
        case CHANGE_POST_TEXT: {
            return {
                ...state,
                postText: action.newText
            }
        }
        case SET_PROFILE : {
            return {
                ...state,
                profile: action.profile

            }
        }
        case SET_IS_FETCHING : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

export const addPost = (text) => {
    return {
        type: SEND_POST,
        textPost: text
    }
}
export const onPostChange = (text) => {
    return {
        type: CHANGE_POST_TEXT,
        newText: text

    }
}
export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile
    }
}
export const setIsFetching = (isFetching) =>{
    return{
        type: SET_IS_FETCHING,
        isFetching
    }
}

export default profileReducer;