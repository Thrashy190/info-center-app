import React from 'react'
import { CCard, CCardBody, CCardSubtitle, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'

const TesisCards = ({ data }) => {
  return (
    <CCard style={{ width: '90%', height: '9rem' }} className=" my-2">
      <CCardBody>
        <CRow>
          <CCardTitle>{data.nombre}</CCardTitle>
        </CRow>
        <CRow>
          <CCol>
            <CRow>
              <CCardSubtitle>Especialidad</CCardSubtitle>
              <CCardText>{data.especialidad}</CCardText>
            </CRow>
            <CRow className="my-2">
              <CCardSubtitle>Fecha</CCardSubtitle>
              <CCardText>2022</CCardText>
            </CRow>
          </CCol>
          <CCol>
            <CRow className="my-2">
              <CCardSubtitle>Ejemplar</CCardSubtitle>
              <CCardText>{data.code}</CCardText>
            </CRow>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default TesisCards
