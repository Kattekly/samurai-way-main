import {ActionTypes, RootStateType} from "./State";

const profileReducer = (state: RootStateType, action: ActionTypes) => {
    const ADD_POST = 'ADD-POST'
    const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


    if (action.type === ADD_POST) {
        let newPost = {
            id: new Date().getTime(),
            message: state.messagePage.newPostText,
            like: 0
        };
        state.messagePage.posts.push(newPost)
        state.messagePage.newPostText = ''

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.messagePage.newPostText = action.newText

    }

    return state
}