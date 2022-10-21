import {ActionTypes, RootStateType} from "./State";

const SEND_MESSAGE = 'SEND-MESSAGE'
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'

export const dialogsReducer = (state:  RootStateType, action: ActionTypes) => {

if (action.type === SEND_MESSAGE) {
        let body = {
            id: new Date().getTime(),
            message: state.profilePage.newMessageText
        }
        state.profilePage.messages.push(body)
        state.profilePage.newMessageText = ''

    }else if (action.type === NEW_MESSAGE_TEXT) {
        state.profilePage.newMessageText = action.body

    }

    return state
}