import {TablePagination} from "@material-ui/core";
import React, {ChangeEvent, MouseEvent, FC, useEffect, useState} from "react";

type CustomPaginationPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    onPageChanged: (page: number, pageSize?: number) => void
}
export const CustomPagination: FC<CustomPaginationPropsType> = ({
                                                                    totalUsersCount,
                                                                    pageSize,
                                                                    onPageChanged,
                                                                    currentPage
                                                                }) => {
    const [rowsPerPage, setRowsPerPage] = useState(pageSize);
    useEffect(() => {
        if (pageSize === rowsPerPage) return
        setRowsPerPage(pageSize)
    }, [pageSize])

    const handleChangeRowsPerPage = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        onPageChanged(1, parseInt(event.target.value, 10))
    };
    const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, page: number) => {
        onPageChanged(page + 1, rowsPerPage)
    };
    return (
        <TablePagination
            component="div"
            labelRowsPerPage="Users per page:"
            count={totalUsersCount}
            page={currentPage - 1}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}