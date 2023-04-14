import React from 'react'
import { CCard, CCardBody, CFormCheck, CFormInput, CFormSelect } from '@coreui/react'
import { rangeYear } from '../../helpers/date'

const BookSearcher = () => {
  return (
    <CCard style={{ height: '10rem' }}>
      <CCardBody>
        <CFormInput placeholder="Buscador" />
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
