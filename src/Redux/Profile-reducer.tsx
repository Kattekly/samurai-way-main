import {ActionTypes, ProfilePageType, RootStateType} from "./State";
import {MyLoginAPI, ProfileAPI} from "../api/Api";
import {setAuthUserData} from "./AuthReducer";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


export type ProfileUserPropsType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactPropsType
    photos: photosType
}

type ContactPropsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type photosType = {
    small: string
    large: string
}

let initialState: ProfilePageType  = {
    posts: [
        {id: 1, message: "Hi, how are yo?", like: 15},
        {id: 2, message: "It's my first post", like: 20}
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state= initialState, action: any) => {

   /* let stateCopy = {
        ...state,
        posts: [...state.posts] //если убрать, не будет добавлять пустой пост
    }
*/
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                like: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state
    }
}

export const addPostActionCreator = (postText: string) => ({
    type: "ADD-POST",
    newPostText: postText
} as const)
export  const updateNewPostActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }  as const
}


export const getProfileThunk = (userId: string) => {
    return (dispatch: any) => {
        ProfileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}


export const setUserProfile = (profile: ProfileUserPropsType) => ({type: SET_USER_PROFILE, profile})