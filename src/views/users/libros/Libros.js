import React from 'react'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CRow,
  CCol,
  CContainer,
  CCardSubtitle,
  CPagination,
  CPaginationItem,
  CFormInput,
  CFormCheck,
  CFormSelect,
} from '@coreui/react'

const Libros = () => {
  function rangeYear() {
    const max = new Date().getFullYear()
    const min = 1900
    const years = []

    for (let i = max; i >= min; i--) {
      years.push(i)
    }
    return years
  }
  const arr = [
    { nombre: 'Titulo 1', autor: 'nombre', id: 1 },
    { nombre: 'Titulo 2', autor: 'nombre', id: 2 },
    { nombre: 'Titulo 3', autor: 'nombre', id: 3 },
  ]
  return (
    <>
      <CContainer>
        {/* este es para el filtro*/}
        <CRow>
          <CCol xs={4}>
            <CCard style={{ width: '80%', height: '11rem' }}>
              <CCardBody>
                <CFormInput placeholder="Buscador" />
                {/* Aqui esta la barrita buscadora*/}
                <CFormSelect aria-label="Default select example" className=" my-3">
                  {rangeYear().map((year) => {
                    return (
                      <option value={year} key={year}>
                        {year}
                      </option>
                    )
                  })}
                </CFormSelect>
                <CFormCheck className=" my-3" id="flexCheckDefault" label="Disponible" />
                {/* botton de disponibilidad */}
              </CCardBody>
            </CCard>
          </CCol>
          <CCol>
            {/* este es para cada tarjeta*/}
            {arr.map((data) => {
              return (
                <CRow key={data.id}>
                  <CCol>
                    <CCard style={{ width: '90%', height: '9rem' }} className=" my-2">
                      <CCardBody>
                        <CRow>
                          <CCardTitle>{data.nombre}</CCardTitle>
                        </CRow>
                        <CRow>
                          <CCardSubtitle>Autor</CCardSubtitle>
                          <CCardText>{data.autor}</CCardText>
                        </CRow>
                        <CRow>
                          <CCol>
                            <CCardSubtitle>Fecha de publicación</CCardSubtitle>
                            <CCardText>{data.autor}</CCardText>
                          </CCol>
                          <CCol>
                            <CCardSubtitle>IBSN/ISSN</CCardSubtitle>
                            <CCardText>{data.autor}</CCardText>
                          </CCol>
                        </CRow>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              )
            })}
          </CCol>
        </CRow>
      </CContainer>
      {/* aqui esta la pagincación */}
      <CPagination aria-label="Page navigation example" className="justify-content-center">
        <CPaginationItem>Previous</CPaginationItem>
        <CPaginationItem>1</CPaginationItem>
        <CPaginationItem>2</CPaginationItem>
        <CPaginationItem>3</CPaginationItem>
        <CPaginationItem>Next</CPaginationItem>
      </CPagination>
    </>
  )
}

export default Libros
