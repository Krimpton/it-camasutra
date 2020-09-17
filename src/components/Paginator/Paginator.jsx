import React from "react";
import ss from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize); //округление в большую сторону

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => {
            return <span className={currentPage === p && ss.bold}
                         onClick={(e) => {
                             onPageChanged(p);
                         }}>{p}</span>
        })}</div>
}

export default Paginator;