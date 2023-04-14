import React from 'react'
import { CCard, CCardBody, CCardSubtitle, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'

const BooksCards = ({ data }) => {
  return (
    <CCard style={{ width: '90%', height: '9rem' }} className=" my-2">
      <CCardBody>
        <CRow>
          <CCardTitle>{data.nombre}</CCardTitle>
        </CRow>
        <CRow>
          <CCol>
            <CRow>
              <CCardSubtitle>Autor</CCardSubtitle>
              <CCardText>{data.autor}</CCardText>
            </CRow>
            <CRow>
              <CCardSubtitle>Fecha de publicación</CCardSubtitle>
              <CCardText>{data.autor}</CCardText>
            </CRow>
          </CCol>
          <CCol>
            <CRow>
              <CCardSubtitle>Clasificación</CCardSubtitle>
              <CCardText>{data.autor}</CCardText>
            </CRow>
            <CRow>
              <CCardSubtitle>Tipo</CCardSubtitle>
              <CCardText>{data.autor}</CCardText>
            </CRow>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default BooksCards
