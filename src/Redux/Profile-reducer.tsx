import {ProfileAPI} from "../api/Api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SET_PHOTO_SUCCESED = 'SET_PHOTO_SUCCESED'

export type ProfileUserPropsType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactPropsType
    photos: photosType
    aboutMe: string
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

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are yo?", like: 15},
        {id: 2, message: "It's my first post", like: 20}
    ],
    profile: null,
    status: ''
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
                profile: {...action.profile, photos: action.photos}
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
export const savePhotoSuccess = (photos: photosType) => ({type: SET_PHOTO_SUCCESED, photos})



export const getStatusThunk = (userId: string) => async (dispatch: any) => {
    let response = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatusThunk = (status: string) => async (dispatch: any) => {
    let response = await ProfileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await ProfileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        debugger
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}