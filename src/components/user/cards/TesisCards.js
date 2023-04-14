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

const TesisCards = ({ data }) => {
  return (
    <CCard style={{ height: '12rem' }} className=" my-2">
      <CCardHeader className="d-flex justify-content-between">
        <CCardTitle style={{ paddingTop: '5px' }}>{data.nombre}</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CRow className="pb-2">
          <CCol>
            <CCardSubtitle>Especialidad</CCardSubtitle>
            <CCardText>{data.Especialidad}</CCardText>
          </CCol>
          <CCol>
            <CCardSubtitle>Ejemplar</CCardSubtitle>
            <CCardText>{data.Ejemplar}</CCardText>
          </CCol>
        </CRow>
        <CRow>
          <CCol className="my-2">
            <CCardSubtitle>Fecha</CCardSubtitle>
            <CCardText>2022</CCardText>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default TesisCards
