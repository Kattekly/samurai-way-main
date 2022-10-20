import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import state, {ProfilePageType} from "../../../Redux/State";
import {AppPropsType, MessageType} from "../../../App";


const MyPosts = (props: MessageType) => {

    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef <HTMLTextAreaElement>()

    let addPost = () => {

           props.dispatch({type: 'ADD-POST', newPostText: ''})


           /* if (props.addPost) {
                props.addPost(props.newPostText)
            }*/
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})

       /* if (newPostElement.current) {
            let text = newPostElement.current.value
            if (props.updateNewPostText) {
   props.updateNewPostText(text)
    }}*/
    }}

    return <div className={s.postsBlock}>
        My Posts
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>
};

export default MyPosts;