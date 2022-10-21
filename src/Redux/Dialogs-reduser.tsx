import {ActionTypes, RootStateType} from "./State";

const dialogsReducer = (state:  RootStateType, action: ActionTypes) => {

if (action.type === 'SEND-MESSAGE') {
        let body = {
            id: new Date().getTime(),
            message: this._state.profilePage.newMessageText
        }
        this._state.profilePage.messages.push(body)
        this._state.profilePage.newMessageText = ''
        this._rerenderEntireTree();
    }else if (action.type === 'NEW-MESSAGE-TEXT') {
        this._state.profilePage.newMessageText = action.body
        this._rerenderEntireTree();
    }

    return state
}