import {MyLoginAPI, UnfollowAPI} from "../api/Api";
import {toggleFollowingProgress, unfollowSuccess} from "./User-reduser";

const SET_USER_DATA = 'SET_USER_DATA'

export type initialStatePropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const AuthReducer = (state = initialState, action: any): initialStatePropsType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
};

export const setAuthUserData = (id: number | null, email: string | null, login: string | null) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
})

export const getLogin = () => {
    return (dispatch: any) => {
        MyLoginAPI.getHeader().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login));
            }
        })
    }
}