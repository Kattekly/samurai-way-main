import React, {useState} from 'react';
import s from "../../common/Pagination/Pagination.module.css";
import {requestUsers} from "../../../Redux/User-reduser";

type PaginationType = {
    currentPage: number
    onPageChange: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
    pagesInBlock: number
}


const Pagination: React.FC<PaginationType> = ({currentPage, onPageChange, totalItemsCount, pageSize, pagesInBlock}) => {
    let pages = [];
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pagesBlocksCount = Math.ceil(pagesCount / pagesInBlock);
    let [currentPageBlock, setCurrentPageBlock] = useState(1)
    let leftBlockPageNumber = (currentPageBlock - 1) * 10 + 1;
    let rightBlockPageNumber = (currentPageBlock - 1) * 10 + 10;

    const nextButtonHandler = () => {
        setCurrentPageBlock((current) => current + 1)
    }
    const prevButtonHandler = () => {
        setCurrentPageBlock((current) => current - 1)
    }

    if (currentPageBlock !== 1) {
        for (let i = leftBlockPageNumber; i <= rightBlockPageNumber; i++) {
            pages.push(i)
        }
    } else if (currentPageBlock === 1) {
        for (let i = leftBlockPageNumber; i <= rightBlockPageNumber; i++) {
            pages.push(i)
        }
    } else {
        if (pagesCount > 10) {
            if (currentPage > 5) {
                for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                    pages.push(i)
                    if (i === pagesCount) break
                }
            } else {
                for (let i = 1; i <= 10; i++) {
                    pages.push(i)
                    if (i === pagesCount) break
                }
            }
        } else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
    }


    return (
        <div className={s.items}>
            {currentPageBlock > 1 && <button onClick={prevButtonHandler}>{"<< "}</button>}
            {
                pages.map((p, index) => {
                    return <span className={String(currentPage === p && s.selectedPage)} key={index}
                                 onClick={() => {
                                     onPageChange(p)
                                 }}> {p} </span>
                })
            }
            {currentPageBlock < pagesBlocksCount && <button onClick={nextButtonHandler}>{">>"}</button>}
        </div>
    )
}

export default Pagination;