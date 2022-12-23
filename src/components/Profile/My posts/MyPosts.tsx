import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MessageType} from "../../../App";
import {InjectedFormProps, reduxForm} from "redux-form";


const MyPosts = (props: MessageType) => {
    console.log({props})
    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef <HTMLTextAreaElement>()

    let onAddPost = (values: any) => {

        if (props.addPost) {
            props.addPost(props.newPostText)
        }
    }

  /*  let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            if (props.updateNewPostText) {
                props.updateNewPostText(text)
            }
        }
    }
*/

    return <div className={s.postsBlock}>
        My Posts
        <AddNewPostFormRedux onSubmit={onAddPost}/>

        <div className={s.posts}>
            {postElement}
        </div>
    </div>
};

type FormDataType = {
    newPostText: string
}

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;