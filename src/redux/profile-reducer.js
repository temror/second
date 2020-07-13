const SEND_POST = 'SEND-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

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
        postText: ''
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
        default:
            return state
    }
}

export const sendPostActionCreator = (text) => {
    return {
        type: SEND_POST,
        textPost: text
    }
}
export const changePostTextActionCreator = (text) => {
    return {
        type: CHANGE_POST_TEXT,
        newText: text

    }
}

export default profileReducer;