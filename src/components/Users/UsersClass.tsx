import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import axios from "axios";
import {NewUserPropsType} from "./UsersContainer";
import {setUsersTotalCountAC, UsersMaxPropsType} from "../../Redux/User-reduser";
import UsersFunc from "./UsersFunc";

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


        return <UsersFunc totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage} onPageChange={this.onPageChange} users={this.props.usersPage.users}/>
}

export default UsersAPIComponent;