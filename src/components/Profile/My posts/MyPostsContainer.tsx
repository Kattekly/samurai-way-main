import React from 'react';
import {MessageType} from "../../../App";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props: MessageType) => {

    let newPostElement = React.createRef <HTMLTextAreaElement>()

    let addPost = () => {
        if (props.dispatch) {
            props.dispatch(addPostActionCreator(''))
        }
    }

    let onPostChange = (text: string) => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            if (props.dispatch) {
                props.dispatch(updateNewPostActionCreator(text))
            }
        }
    }


    return (
        <MyPosts newPostText={props.newPostText} posts={props.posts}
                 updateNewPostText={onPostChange} addPost={addPost}/>
    )

};

export default MyPostsContainer;