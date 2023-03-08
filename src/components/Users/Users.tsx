import React from 'react';
import s from "./Users.module.css";
import {UsersPropsType} from "../../Redux/user-reduser";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";
import {CustomPagination} from "../common/Pagination/CustomPagination";

type UsersFuncPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    users: Array<UsersPropsType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}


const Users: React.FC<UsersFuncPropsType> = ({currentPage, onPageChange, totalUsersCount, pageSize, ...props}) => {

    return  <div className='content'>

        <div className={s.usersContainer}>

            <div className={s.usersCards}>

    <div className={s.usersItems}>
        {/*<CustomPagination currentPage={currentPage}
                          totalUsersCount={totalUsersCount}
                          pageSize={pageSize}
                          onPageChanged={onPageChange}/>*/}

        <Pagination currentPage={currentPage} onPageChange={onPageChange} totalItemsCount={totalUsersCount}
                    pageSize={pageSize} pagesInBlock={10}/>
        <div>
            {props.users.map(el => <User key={el.id} user={el}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow} follow={props.follow}/>)}
        </div>
    </div>

            </div>
    </div>
    </div>
};

export default Users;