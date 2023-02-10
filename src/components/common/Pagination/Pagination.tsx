import React, {useState} from 'react';
import s from "../../common/Pagination/Pagination.module.css";

type PaginationType = {
    currentPage: number
    onPageChange: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
}


const Pagination: React.FC<PaginationType> = ({currentPage, onPageChange, totalItemsCount, pageSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {pages.map(p => {
                return <span className={String(currentPage === p && s.selectedPage)}
                             onClick={() => {
                                 onPageChange(p)
                             }}>{p}</span>
            })}
        </div>
    );
};

export default Pagination;