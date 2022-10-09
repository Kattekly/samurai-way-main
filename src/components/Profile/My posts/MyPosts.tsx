import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import state, {addPost, ProfilePageType} from "../../../Redux/State";


const MyPosts = (props: ProfilePageType) => {

    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef <HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            if (props.addPost && text) {
                props.addPost(text)
            }
            newPostElement.current.value = ""
        }
    }

    return <div className={s.postsBlock}>
        My Posts
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
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