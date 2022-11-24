const SET_USER_DATA = 'SET_USER_DATA'

type initialStatePropsType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
}

let initialState: initialStatePropsType = {
    id: null,
    email: null,
    login: null,
    isFetching: false
}


export const AuthReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
};

export const setUserData = (id: number | null, email: string | null, login: string | null) => ({type: SET_USER_DATA, data: {id, email, login}})