import {v1} from "uuid";

const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: "Katerina", avatar: 'https://kartinkin.net/uploads/posts/2022-03/thumbs/1647955342_64-kartinkin-net-p-kartinki-kotikov-risunki-67.jpg'},
        {id: 2, name: "Vladimir", avatar: 'https://i.pinimg.com/736x/b2/6c/45/b26c451145cb780d96ac7a7ec90d541b.jpg'},
        {id: 3, name: "Andrey", avatar: "https://i.pinimg.com/originals/82/72/b0/8272b07b71e159c9069e0dd7756bd9be.jpg"},
        {id: 4, name: "Valera", avatar: "https://i.pinimg.com/originals/73/ec/31/73ec31a41dc09194ab79c6327f4cde19.jpg"},
        {id: 5, name: "Maksim", avatar: "https://i.pinimg.com/originals/14/2c/8c/142c8c170beab057c71c3b6a8fb587b5.jpg"},
    ],
    messages: [
        {id: 1, message: "Hi", avatar: "https://i.pinimg.com/736x/b2/6c/45/b26c451145cb780d96ac7a7ec90d541b.jpg"},
        {id: 2, message: "How are you?", avatar: 'https://i.pinimg.com/736x/b2/6c/45/b26c451145cb780d96ac7a7ec90d541b.jpg'},
        {id: 3, message: "Yo", avatar: 'https://i.pinimg.com/736x/b2/6c/45/b26c451145cb780d96ac7a7ec90d541b.jpg'},
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
