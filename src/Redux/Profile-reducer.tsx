import {ActionTypes, ProfilePageType, RootStateType} from "./State";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState: ProfilePageType  = {
    posts: [
        {id: 1, message: "Hi, how are yo?", like: 15},
        {id: 2, message: "It's my first post", like: 20}
    ],
    newPostText: ''
}

export const profileReducer = (state= initialState, action: ActionTypes) => {

    let stateCopy = {
        ...state,
        posts: [...state.posts] //если убрать, не будет добавлять пустой пост
    }

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                like: 0
            };
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy

        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText
            return stateCopy

        default:
            return state
    }
}

export const addPostActionCreator = (postText: string) => ({
    type: "ADD-POST",
    newPostText: postText
} as const)


export  const updateNewPostActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }  as const
}