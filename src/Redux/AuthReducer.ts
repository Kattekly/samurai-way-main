import {authAPI} from "../api/Api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

export type initialStatePropsType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: initialStatePropsType = {
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
                ...action.payload
            }
        default:
            return state
    }
};

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})

export const getLogin = () => (dispatch: Dispatch) => {
   return authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    })
}

export const LoginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getLogin())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Неверный email или пароль"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}

export const LogOut = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}