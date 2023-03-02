import {v1} from "uuid";

const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

type initialStateType = typeof initialState

export const dialogsReducer = (state: initialStateType = initialState, action: sendMessageCreatorType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {id: v1(), message: action.newMessageText}
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageText: string) => ({
    type: "SEND-MESSAGE", newMessageText
} as const)

type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>

/*
export const updateMessageBodyCreator = (body: string) => {
    return {
        type: "NEW-MESSAGE-TEXT",
        body: body
    } as const
}*/
