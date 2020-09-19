import React, {useState} from "react";
import ss from "./Paginator.module.css";
import cn from  "classnames"

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize); //округление в большую сторону

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div>
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
            return <span className={cn({
                [ss.selectedPage]: currentPage === p
            }, ss.bold)}
                         key={p}
                         onClick={(e) => {
                             onPageChanged(p);
                         }}>{p}</span>
        })}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>
}

export default Paginator;