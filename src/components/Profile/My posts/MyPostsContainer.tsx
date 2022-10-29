import React from 'react';
import {MessageType} from "../../../App";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import {ReduxStateType} from "../../../Redux/Redux-Stor";
import {ActionTypes} from "../../../Redux/State";

type ContainerNewType = {
    store: Store<ReduxStateType, ActionTypes>
}

const MyPostsContainer = (props: ContainerNewType) => {
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

};

export default MyPostsContainer;