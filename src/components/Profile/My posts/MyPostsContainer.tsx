import React from 'react';
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ActionTypes, RootStateType} from "../../../Redux/state";
import {connect} from "react-redux";


/*type ContainerNewType = {
    store: Store<ReduxStateType, ActionTypes>
}

const MyPostsContainer1 = (props: ContainerNewType) => {
    let state = props.store.getState().messagePage
    let newPostElement = React.createRef <HTMLTextAreaElement>()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator(''))
    }

    let onPostChange = (text: string) => {
            props.store.dispatch(updateNewPostActionCreator(text))
    }


    return (
        <MyPosts newPostText={state.newPostText} posts={state.posts}
                 updateNewPostText={onPostChange} addPost={addPost}/>
    )

};*/

//данные из стейна, пропсы
let mapStateToProps = (state: RootStateType) => {
    return {
        newPostText: state.messagePage.newPostText,
        posts: state.messagePage.posts
    }
}

//колбеки
let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        /*updateNewPostText: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        },*/
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;