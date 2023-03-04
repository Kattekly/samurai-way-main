import {connect} from "react-redux";
import {addPostActionCreator} from "../../../../Redux/profile-reducer";
import {AddPost} from "./AddPost";

type  MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => dispatch(addPostActionCreator(newPostText))
    }
}

export const AddPostContainer = connect(null, mapDispatchToProps )(AddPost)