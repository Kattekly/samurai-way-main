let store: StorePropsType = {
    _state: {
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
            newPostText: ''
        },
        sidebar: {}
    },
    _rerenderEntireTree() {
        console.log('state chenged')
    },
    getState() {
        return this._state
    },

    addPost(newPostText: string) {
        let newPost = {
            id: 5,
            message: this._state.messagePage.newPostText,
            like: 0
        };
        this._state.messagePage.posts.push(newPost)
        this._state.messagePage.newPostText = ''
        this._rerenderEntireTree()
    },

    updateNewPostText(newText: string) {
        this._state.messagePage.newPostText = newText
        this._rerenderEntireTree()
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    }
}


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
    newPostText: string
    updateNewPostText?: (newText: string) => void
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


export type StorePropsType = {
    _state: RootStateType,
    getState: () => RootStateType,
    addPost: (newPostText: string) => void,
    updateNewPostText: (newText: string) => void,
    subscribe: (observer: () => void) => void,
    _rerenderEntireTree: () => void
}

export default store