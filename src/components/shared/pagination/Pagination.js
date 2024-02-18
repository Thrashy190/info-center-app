import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

const Pagination = ({ page, setPage, data }) => {
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const nextPage = () => {
    if (page < 6) {
      setPage(page + 1)
    }
  }

  const selectPage = (e) => {
    setPage(parseInt(e.target.innerText))
  }

  return (
    <CPagination aria-label="Page navigation example" className="justify-content-center">
      <CPaginationItem
        aria-label="Previous"
        onClick={prevPage}
        disabled={page === 1 ? true : false}
      >
        <span aria-hidden="true">&laquo;</span>
      </CPaginationItem>
      {data.previousPage === 0 ? null : (
        <CPaginationItem onClick={selectPage}> {data.previousPage} </CPaginationItem>
      )}

      <CPaginationItem active onClick={selectPage}>
        {data.currentPage}
      </CPaginationItem>

      {data.previousPage === data.totalPages - 1 ? null : (
        <CPaginationItem onClick={selectPage}> {data.nextPage} </CPaginationItem>
      )}
      <CPaginationItem
        aria-label="Next"
        onClick={nextPage}
        disabled={page === data.totalPages ? true : false}
      >
        <span aria-hidden="true">&raquo;</span>
      </CPaginationItem>
    </CPagination>
  )
}

export default Pagination
