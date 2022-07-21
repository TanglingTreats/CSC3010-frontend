import React from "react";

interface PaginationIntf {
  numOfPages: number;
  page: number;
  setPage: any;
}
export function Pagination(props: PaginationIntf) {

  const range = Array.from(Array(props.numOfPages).keys());
  console.log(range);

  return (
    <div className="pagination">
      {
        range.map((num: number, index:number) => {
          return <p className="page-numbers" onClick={() => {props.setPage(num);}}>{num + 1}</p>
        })
      }
    </div>
  )
}
