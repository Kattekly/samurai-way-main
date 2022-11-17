import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC,
    unfollowAC,
    UsersMaxPropsType,
    UsersPropsType
} from "../../Redux/User-reduser";
import {ReduxStateType} from "../../Redux/Redux-Stor";
import {Dispatch} from "redux";
import UsersClass from "./UsersClass";

export type NewUserPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    usersPage: UsersMaxPropsType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

//данные из стейна, пропсы
let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}


type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersPropsType>) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersTotalCount: (totalCount: number) => void
}

//колбеки
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersPropsType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)

export default UsersContainer;