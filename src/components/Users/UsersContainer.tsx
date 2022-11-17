import React from 'react';
import {connect} from "react-redux";
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
import axios from "axios";
import Users from "./Users";

export type NewUserPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    usersPage: UsersMaxPropsType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}


class UsersAPIComponent extends React.Component <NewUserPropsType, UsersMaxPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
        })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {


        return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage} onPageChange={this.onPageChange}
                          users={this.props.usersPage.users}
                          follow={this.props.follow} unfollow={this.props.unfollow}/>
    }
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer;