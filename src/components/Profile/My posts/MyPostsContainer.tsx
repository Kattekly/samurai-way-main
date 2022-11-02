import React from 'react';
import {MessageType} from "../../../App";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import {ReduxStateType} from "../../../Redux/Redux-Stor";
import {ActionTypes, RootStateType} from "../../../Redux/State";
import {connect} from "react-redux";
import {sendMessageCreator, updateMessageBodyCreator} from "../../../Redux/Dialogs-reduser";

/*type ContainerNewType = {
    store: Store<ReduxStateType, ActionTypes>
}

const MyPostsContainer1 = (props: ContainerNewType) => {
    let state = props.store.getState().messagePage
    let newPostElement = React.createRef <HTMLTextAreaElement>()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator(''))
    }

    let onPostChange = (text: string) => {
            props.store.dispatch(updateNewPostActionCreator(text))
    }


    return (
        <MyPosts newPostText={state.newPostText} posts={state.posts}
                 updateNewPostText={onPostChange} addPost={addPost}/>
    )

};*/

//данные из стейна, пропсы
let mapDialogToProps = (state: RootStateType) => {
    return {
        ...state,
        newPostText: state.messagePage.newPostText,
        posts: state.messagePage.posts
    }
}

//колбеки
let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator(''))
        }
    }
}


const MyPostsContainer = connect(mapDialogToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;