import {ReduxStateType} from "./Redux-Stor";

export const getUsers = (state: ReduxStateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: ReduxStateType) => {
    return state.usersPage.pageSize
}