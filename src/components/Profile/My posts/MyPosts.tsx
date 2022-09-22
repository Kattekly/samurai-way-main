import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.postsBlock}>
        My Posts
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            <Post message="Hi, how are yo?" like=" 15"/>
            <Post message="It's my first post" like=" 20"/>
        </div>
    </div>
};

export default MyPosts;