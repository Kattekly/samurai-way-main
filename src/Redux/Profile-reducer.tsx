import {ProfileAPI} from "../api/Api";

const ADD_POST = 'ADD-POST'
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


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

        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => ({
    type: "ADD-POST",
    newPostText: newPostText
} as const)
// export const updateNewPostActionCreator = (text: string) => {
//     return {
//         type: 'UPDATE-NEW-POST-TEXT',
//         newText: text
//     } as const
// }


export const getProfileThunk = (userId: string) => (dispatch: any) => {
        ProfileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
}


export const setUserProfile = (profile: ProfileUserPropsType) => ({type: SET_USER_PROFILE, profile})


export const setStatus = (status: string) => ({type: SET_STATUS, status})

export const getStatusThunk = (userId: string) => {
    return (dispatch: any) => {
        ProfileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatusThunk = (status: string) => {
    return (dispatch: any) => {
        ProfileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
        })
    }
}