import React from 'react'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CRow,
  CCol,
  CButton,
  CCardSubtitle,
} from '@coreui/react'

const Libros = () => {
  const arr = [
    { nombre: 'Titulo', autor: 'nombre', id: 1 },
    { nombre: 'Titulo', autor: 'nombre', id: 2 },
    { nombre: 'Titulo', autor: 'nombre', id: 3 },
  ]
  return (
    <div className="d-flex justify-content-center">
      <div>
        <div>
          {arr.map((data) => {
            return (
              <CRow key={data.id}>
                <CCol>
                  <CCard className=" my-2">
                    <CCardBody>
                      <CCardTitle>{data.nombre}</CCardTitle>
                      <CCardSubtitle>Autor</CCardSubtitle>
                      <CCardText>{data.autor}</CCardText>
                      <CCardSubtitle>Fecha de publicación</CCardSubtitle>
                      <CCardText>{data.autor}</CCardText>
                      <CCardSubtitle>IBSN/ISSN</CCardSubtitle>
                      <CCardText>{data.autor}</CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol>
                  <CCard className=" my-2">
                    <CCardBody>
                      <CCardTitle>{data.nombre}</CCardTitle>
                      <CCardSubtitle>Autor</CCardSubtitle>
                      <CCardText>{data.autor}</CCardText>
                      <CCardSubtitle>Fecha de publicación</CCardSubtitle>
                      <CCardText>{data.autor}</CCardText>
                      <CCardSubtitle>IBSN/ISSN</CCardSubtitle>
                      <CCardText>{data.autor}</CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Libros
