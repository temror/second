const NEW_MESSAGE = 'NEW-MESSAGE'
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MESSAGE: {
            let newMessage = {
                text: action.textPost,
                id: 12
            }
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage);
            stateCopy.messageText = "";
            return stateCopy;
        }
        case CHANGE_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.messageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (text) => {
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

export default dialogsReducer;