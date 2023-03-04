import {ProfileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SET_PHOTO_SUCCESED = 'SET_PHOTO_SUCCESED'
const ADD_LIKE = 'ADD_LIKE'

export type ProfileUserPropsType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactPropsType
    photos: photosType
    aboutMe: string
}

export type ContactPropsType = {
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

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are yo?", like: 15},
        {id: 2, message: "It's my first post", like: 20}
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: '',
        }
    },
    status: ""
}

export const profileReducer = (state = initialState, action: any) => {

    /* let stateCopy = {
         ...state,
         posts: [...state.posts] //если убрать, не будет добавлять пустой пост
     }
 */
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: new Date().getTime(),
                message: action.newPostText,
                like: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        /*case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }*/
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(el => el.id != action.postId)
            }
        }
        case SET_PHOTO_SUCCESED: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileUserPropsType
            }
        }
        case ADD_LIKE: {
            return {
                ...state,
                posts: state.posts.map(elem => elem.id === action.id ? {...elem, like: action.count} : elem)
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => ({
    type: "ADD-POST",
    newPostText: newPostText
} as const)

export const deletePost = (postId: number) => ({type: DELETE_POST, postId})
export const getProfileThunk = (userId: string) => async (dispatch: any) => {
    let response = await ProfileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const setUserProfile = (profile: ProfileUserPropsType) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos: photosType) => ({type: SET_PHOTO_SUCCESED, photos} as const)
export const addLike = (count: number, id: number) => {
    return {type: ADD_LIKE, count: count, id: id} as const
}


export const getStatusThunk = (userId: string) => async (dispatch: any) => {
    let response = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatusThunk = (status: string) => async (dispatch: any) => {
    try {
        let response = await ProfileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        } else if (response.data.resultCode === 1) {
            alert("Error")
        }
    } catch (error) {
        //
    }
}

export const savePhoto = (file: File) => async (dispatch: any) => {
    let response = await ProfileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        debugger
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileUserPropsType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id
    let response = await ProfileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        if (userId) {
            dispatch(getProfileThunk(userId))
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        /* dispatch(stopSubmit("edit-profile", {"contacts": {"": response.data.messages[0] }}))*/
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}