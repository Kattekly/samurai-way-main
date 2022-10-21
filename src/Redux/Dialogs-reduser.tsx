import {ActionTypes, RootStateType} from "./State";

const dialogsReducer = (state:  RootStateType, action: ActionTypes) => {

if (action.type === 'SEND-MESSAGE') {
        let body = {
            id: new Date().getTime(),
            message: state.profilePage.newMessageText
        }
        state.profilePage.messages.push(body)
        state.profilePage.newMessageText = ''

    }else if (action.type === 'NEW-MESSAGE-TEXT') {
        state.profilePage.newMessageText = action.body

    }

    return state
}