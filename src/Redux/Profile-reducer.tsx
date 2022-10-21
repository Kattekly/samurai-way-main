import {ActionTypes, RootStateType} from "./State";
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state: RootStateType, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: new Date().getTime(),
                message: state.messagePage.newPostText,
                like: 0
            };
            state.messagePage.posts.push(newPost)
            state.messagePage.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.messagePage.newPostText = action.newText
            return state
    }

  /*  if (action.type === ADD_POST) {
        let newPost = {
            id: new Date().getTime(),
            message: state.messagePage.newPostText,
            like: 0
        };
        state.messagePage.posts.push(newPost)
        state.messagePage.newPostText = ''

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.messagePage.newPostText = action.newText

    }*/

    return state
}