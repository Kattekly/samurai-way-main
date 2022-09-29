import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi, how are yo?", like: 15},
        {id: 2, message: "It's my first post", like: 20}
    ]

    let postElement = postData.map(post => <Post message={post.message} like={post.like}/>)

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
            {postElement}
        </div>
    </div>
};

export default MyPosts;