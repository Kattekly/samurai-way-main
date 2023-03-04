import {FC, useState} from "react";
import {AddPostFormDataType, AddPostReduxForm} from "./AddPostForm";
import s from "./AddPost.module.css"

type AddPostProps = {
    addPost: (newPostText: string) => void
}

export const AddPost: FC<AddPostProps> = ({addPost}) => {
    const addPostHandler = (values: AddPostFormDataType):void => {
        addPost(values.post)
    }
    return (
        <div className={s.postContainer}>
            <h3 className={s.title}>My posts</h3>
            <AddPostReduxForm onSubmit={addPostHandler}/>
        </div>
    )
}