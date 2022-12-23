import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MessageType} from "../../../App";
import {InjectedFormProps, reduxForm} from "redux-form";
import {LoginForm} from "../../Login/Login";

type FormDataType = {
    text: string
    addPost: boolean
}



const MyPosts: React.FC<InjectedFormProps<FormDataType>> = (props: MessageType) => {
    console.log({props})
    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef <HTMLTextAreaElement>()

    let onAddPost = () => {

        if (props.addPost) {
            props.addPost(props.newPostText)
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            if (props.updateNewPostText) {
                props.updateNewPostText(text)
            }
        }
    }


    return <div className={s.postsBlock}>
        My Posts
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>
};

export const RedaxPostForm = reduxForm<FormDataType>({form: 'add Post'})(MyPosts)

/*export const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}*/

export default MyPosts;