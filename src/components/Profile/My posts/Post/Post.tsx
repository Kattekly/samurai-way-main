import React from 'react';
import s from "./Post.module.css"

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://cdn1.flamp.ru/de5d137bb9fffdca9df095726d4100e6.jpeg"/>
            post1
            <div>
            <span>Like</span>
            </div>
        </div> )
};

export default Post;