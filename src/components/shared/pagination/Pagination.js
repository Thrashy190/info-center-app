import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

const Pagination = () => {
  return (
    <CPagination aria-label="Page navigation example" className="justify-content-center">
      <CPaginationItem>Previous</CPaginationItem>
      <CPaginationItem>1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem>Next</CPaginationItem>
    </CPagination>
  )
}

export default Pagination
