import {rerenderEntireTree} from "../render";

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id?: number
    message?: string
    like?: number

}

export type ProfilePageType = {
    posts: Array<PostType>
    addPost?: (newMessage: string) => void
    newPostText?: string
}

export type DialogsDataType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type Sidebar = {}

export type RootStateType = {
    profilePage: DialogsDataType
    messagePage: ProfilePageType
    sidebar: Sidebar
}

 let state: RootStateType = {
    profilePage: {
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
    },
    messagePage: {
        posts: [
            {id: 1, message: "Hi, how are yo?", like: 15},
            {id: 2, message: "It's my first post", like: 20}
        ],
        newPostText: "fuck"
    },
    sidebar: {}
}

export let addPost = (newMessage: string) => {
    let newPost = {
        id: 5,
        message: newMessage,
        like: 0
    };
state.messagePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state