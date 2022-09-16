import React from 'react';
import s from "./Post.module.css"

const Post = (props: any) => {

    return (
        <div className={s.item}>
            <img src="https://cdn1.flamp.ru/de5d137bb9fffdca9df095726d4100e6.jpeg"/>
            {props.message}
            <div>
            <span>Like</span>
                {props.like}
            </div>
        </div> )
};

export default Post;