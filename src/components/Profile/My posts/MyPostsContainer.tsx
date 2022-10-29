import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MessageType} from "../../../App";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props: MessageType) => {
    let newPostElement = React.createRef <HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch(addPostActionCreator(''))
    }

    let onPostChange = (text: string) => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch(updateNewPostActionCreator(text))
        }
    }


    return (
        <MyPosts newPostText={props.newPostText} posts={props.posts} dispatch={props.dispatch}
                 updateNewPostText={onPostChange} addPost={addPost}/>
    )

};

export default MyPostsContainer;