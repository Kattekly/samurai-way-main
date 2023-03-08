import {v1} from "uuid";

const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: "Katerina", avatar: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'},
        {id: 2, name: "Vladimir", avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
        {id: 3, name: "Andrey", avatar: "https://img2.freepng.ru/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg"},
        {id: 4, name: "Valera"},
        {id: 5, name: "Maksim"},
    ],
    messages: [
        {id: 1, message: "Hi", avatar: "https://img2.freepng.ru/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg"},
        {id: 2, message: "How are you?", avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
        {id: 3, message: "Yo", avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
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
