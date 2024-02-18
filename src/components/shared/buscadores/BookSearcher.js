import React from 'react'
import { CCard, CCardBody, CFormCheck, CFormInput, CFormSelect } from '@coreui/react'
import { rangeYear } from '../../../helpers/date'

const BookSearcher = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }

  return (
    <CCard style={{ height: '10rem' }}>
      <CCardBody>
        <CFormInput
          onChange={(e) => {
            handleSearch(e)
          }}
          name="search"
          value={search.search}
          placeholder="Buscador"
        />
        {/* Aqui esta la barrita buscadora*/}
        <CFormSelect aria-label="Default select example" className=" my-3">
          <option>Fecha</option>
          {rangeYear().map((year) => {
            return (
              <option value={year} key={year}>
                {year}
              </option>
            )
          })}
        </CFormSelect>
        <CFormCheck className=" my-3" id="flexCheckDefault" label="Disponible" />
      </CCardBody>
    </CCard>
  )
}

export default BookSearcher
