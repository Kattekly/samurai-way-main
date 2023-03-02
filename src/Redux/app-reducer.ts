import {getLogin} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

type InitialStateType = {
    initialized: boolean
}

let InitialState: InitialStateType = {
    initialized: false
}

export const AppReducer = (state = InitialState, action: any) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED})
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getLogin())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}