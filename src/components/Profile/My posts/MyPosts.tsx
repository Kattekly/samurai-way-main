import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi, how are yo?", like: 15},
        {id: 2, message: "It's my first post", like: 20}
    ]

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
            <Post message={postData[0].message} like={postData[0].like}/>
            <Post message={postData[1].message}like={postData[1].like}/>
        </div>
    </div>
};

export default MyPosts;