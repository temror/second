import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduсer";

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
        this._state.profile = profileReducer(this._state.profile,action)
        this._state.dialogs = dialogsReducer(this._state.dialogs,action)
        this._stateRerender()
    },
}
export default store;