import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControls";
import {ActionTypes, PostType} from "../../../Redux/state";

export type MessageType = {
    newPostText: string
    posts: Array<PostType>
    addPost?: (newMessage: string) => void
    updateNewPostText?: (newText: string) => void
    dispatch?: (action: ActionTypes) => void
    newMessageText?: string
    userName: string
    userAvatar: string
    addLike: (count: number, id: number) => void
}

const MyPosts = React.memo((props: MessageType) => {
    return (
        <div className={s.myPostsContainer}>
            <AddPostContainer/>
            {props.posts.map(elem => {
                    return (<Post key={elem.id}
                                  id={elem.id}
                                  message={elem.message}
                                  like={elem.like}
                                  userName={props.userName}
                                  userAvatar={props.userAvatar}
                                  addLike={props.addLike}/>)
                })}
        </div>
    )
})
// let newPostElement = React.createRef <HTMLTextAreaElement>()

/*    let onAddPost = (values: any) => {
        if (props.addPost) {
            props.addPost(values.newPostText)
        }
    }*/

/*  let onPostChange = () => {
      if (newPostElement.current) {
          let text = newPostElement.current.value
          if (props.updateNewPostText) {
              props.updateNewPostText(text)
          }
      }
  }
*/

/*    return <div className={s.postsBlock}>
        My Posts
        <AddNewPostFormRedux onSubmit={onAddPost}/>

        <div className={s.posts}>
            {postElement}
        </div>
    </div>
});

type FormDataType = {
    newPostText: string
}


const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" validate={[required, maxLength10]}
                       placeholder="Post message"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)*/

export default MyPosts;