import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersMaxPropsType, UsersPropsType} from "../../Redux/User-reduser";

//данные из стейна, пропсы
let mapStateToProps = (state: UsersMaxPropsType) => {
    return {
        usersPage: state.users
    }
}

//колбеки
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersPropsType) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;