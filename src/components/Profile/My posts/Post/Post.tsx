import React from 'react';
import s from "./Post.module.css"
import {PostType} from "../../../../Redux/state";
import {UserAvatar} from "../../UserAvatar/UserAvatar";
import {IconButton} from "@material-ui/core";
import {FavoriteBorder} from "@material-ui/icons";

type PostComponentProps = {
    id: number
    message: string
    like: number
    userName: string
    userAvatar: string
    addLike: (count: number, id: number) => void
}

const Post = (props: PostComponentProps) => {
    const onClickLikeHandler = () => {
        let count = props.like+1
        props.addLike(count, props.id)
    }

    return (
        <div className={s.post}>
            <div className={s.avatarAndName}>
                <UserAvatar img={props.userAvatar} size={30}/>
                <h5 style={{marginLeft: '5px'}}>{props.userName}</h5>
            </div>
            {/*<img src="https://cdn1.flamp.ru/de5d137bb9fffdca9df095726d4100e6.jpeg"/>*/}
            <span className={s.message}> {props.message}</span>
            <div className={s.likes}>
                <IconButton onClick={onClickLikeHandler} size={'small'}>
                    <FavoriteBorder color={'primary'}/>
                </IconButton>
                <span> {props.like}</span>

            </div>

        </div>)
};

export default Post;