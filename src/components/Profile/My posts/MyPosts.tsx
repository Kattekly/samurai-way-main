import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import state, { ProfilePageType} from "../../../Redux/State";



const MyPosts = (props: ProfilePageType) => {

    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
       let text = newPostElement.current.value;
       alert(text)
    }


    return <div className={s.postsBlock}>
        My Posts
        <div>
            <div>
                <textarea ref={newPostElement}></textarea >
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