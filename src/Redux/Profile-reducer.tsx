import {ActionTypes, RootStateType} from "./State";

const profileReducer = (state: RootStateType, action: ActionTypes) => {
    const ADD_POST = 'ADD-POST'
    const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


    if (action.type === ADD_POST) {
        let newPost = {
            id: new Date().getTime(),
            message: this._state.messagePage.newPostText,
            like: 0
        };
        this._state.messagePage.posts.push(newPost)
        this._state.messagePage.newPostText = ''
        this._rerenderEntireTree();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.messagePage.newPostText = action.newText
        this._rerenderEntireTree();
    }

    return state
}