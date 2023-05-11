import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'
import PropTypes from 'prop-types'

const BooksCards = ({ data }) => {
  return (
    <CCard style={{ height: '12rem' }} className=" my-2">
      <CCardHeader className="d-flex justify-content-between">
        <CCardTitle style={{ paddingTop: '5px' }}>{data.nombre}</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CRow className="pb-3">
          <CCol>
            <CCardSubtitle>Autor</CCardSubtitle>
            <CCardText>{data.autor}</CCardText>
          </CCol>
          <CCol>
            <CCardSubtitle>Fecha de publicación</CCardSubtitle>
            <CCardText>{data.autor}</CCardText>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CCardSubtitle>Clasificación</CCardSubtitle>
            <CCardText>{data.autor}</CCardText>
          </CCol>
          <CCol>
            <CCardSubtitle>Tipo</CCardSubtitle>
            <CCardText>{data.autor}</CCardText>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

BooksCards.propTypes = {
  data: PropTypes.string.isRequired, // Add the missing prop type validation
}

export default BooksCards
