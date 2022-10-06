type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

type PostType = {
    id: number
    message: string
    like: number
}

type ProfilePageType = {
    postData: Array<PostType>
}

type DialogsDataType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

type Sidebar = {}

type RootStateType = {
    profilePage: DialogsDataType
    messagePage: ProfilePageType
    sidebar: Sidebar
}


export let state: RootStateType = {
    profilePage: {
        dialogsData: [
            {id: 1, name: "Katerina"},
            {id: 2, name: "Vladimir"},
            {id: 3, name: "Andrey"},
            {id: 4, name: "Valera"},
            {id: 5, name: "Maksim"},
            {id: 6, name: "Maria"},
            {id: 7, name: "Karina"}
        ],
        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo"},
        ],
    },
    messagePage: {
        postData: [
            {id: 1, message: "Hi, how are yo?", like: 15},
            {id: 2, message: "It's my first post", like: 20}
        ]
    },
    sidebar: {}
}