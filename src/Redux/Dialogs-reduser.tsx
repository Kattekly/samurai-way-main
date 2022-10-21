import {ActionTypes, RootStateType} from "./State";

const SEND_MESSAGE = 'SEND-MESSAGE'
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'

export const dialogsReducer = (state: RootStateType, action: ActionTypes) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = {
                id: new Date().getTime(),
                message: state.profilePage.newMessageText
            }
            state.profilePage.messages.push(body)
            state.profilePage.newMessageText = ''
            return state
        case NEW_MESSAGE_TEXT:
            state.profilePage.newMessageText = action.body
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({
    type: "SEND-MESSAGE",
} as const)


export  const updateMessageBodyCreator = (body: string) => {
    return {
        type: "NEW-MESSAGE-TEXT",
        body: body
    } as const
}