import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {postData} from "../../../Redux/State";

const MyPosts = () => {

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