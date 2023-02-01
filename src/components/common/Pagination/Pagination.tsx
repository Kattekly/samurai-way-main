import React from 'react';
import s from "../../common/Pagination/Pagination.module.css";

type PaginationType = {
    currentPage: number
    onPageChange: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
}


const Pagination: React.FC<PaginationType> = ({currentPage, onPageChange, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={String(currentPage === p && s.selectedPage)} onClick={() => {
                    onPageChange(p)
                }}>{p}</span>
            })}
        </div>
    );
};

export default Pagination;