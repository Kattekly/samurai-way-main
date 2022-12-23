import {ActionTypes, DialogsDataType} from "./State";

const SEND_MESSAGE = 'SEND-MESSAGE'
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'

let initialState: DialogsDataType = {
    dialogs: [
        {id: 1, name: "Katerina"},
        {id: 2, name: "Vladimir"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Valera"},
        {id: 5, name: "Maksim"},
        {id: 6, name: "Maria"},
        {id: 7, name: "Karina"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = {
                id: new Date().getTime(),
                message: state.newMessageText
            }
            return  {
                ...state,
                newMessageText: '',
                messages: [...state.messages, body]
            }

        case NEW_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.body
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody: string) => ({
    type: "SEND-MESSAGE", newMessageBody
} as const)

type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>

/*
export const updateMessageBodyCreator = (body: string) => {
    return {
        type: "NEW-MESSAGE-TEXT",
        body: body
    } as const
}*/
