const SEND_POST = 'SEND-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'
const NEW_MESSAGE = 'NEW-MESSAGE'
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT'
let store = {
    _state: {
        profile: {
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
        },
        dialogs: {
            users: [
                {id: 1, userName: 'Artem'},
                {id: 2, userName: 'Ivan'},
                {id: 3, userName: 'Mark'},
                {id: 4, userName: 'Sveta'},
                {id: 5, userName: 'Kostya'},
                {id: 6, userName: 'Abram'},
                {id: 7, userName: 'Saga'},
                {id: 8, userName: 'Sara'},
                {id: 9, userName: 'Jane'}
            ],
            messages: [
                {id: 1, text: 'Hui'},
                {id: 2, text: 'Pizda'},
                {id: 3, text: 'Govno'},
                {id: 4, text: 'Jopa'}
            ],
            messageText: ''
        },
        sidebar: {
            friend: [
                {
                    ava: '"https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg"',
                    name: 'Vasya'
                },
                {
                    ava: '"https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg"',
                    name: 'Vasya'
                },
                {
                    ava: '"https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg"',
                    name: 'Vasya'
                }
            ]
        }
    },
    _stateRerender() {
        console.log('hi')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._stateRerender = observer;
    },

    dispatch(action) {
        if (action.type === SEND_POST) {
            let newPost = {
                text: action.textPost,
                likesCount: 12
            }
            this._state.profile.posts.push(newPost);
            this._stateRerender()
        }
        else if (action.type === CHANGE_POST_TEXT) {
            this._state.profile.postText = action.newText;
            this._stateRerender()
        }
        else if (action.type === NEW_MESSAGE) {
            let newMessage = {
                text: action.textPost,
                id: 12
            }
            this._state.dialogs.messages.push(newMessage);
            this._stateRerender()
        }
        else if (action.type === CHANGE_MESSAGE_TEXT) {
            this._state.dialogs.messageText = action.newText;
            this._stateRerender()

        }
    },
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
export const sendMessageActionCreator = (text) =>
{
    return{
        type: NEW_MESSAGE,
        textPost: text
    }
}
export const changeMessageTextActionCreator = (text) => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        newText: text

    }
}
export default store;
window.store = store