import React from 'react'
import { CCard, CCardBody, CCardSubtitle, CCardText, CCardTitle, CRow } from '@coreui/react'

const ProjectsCards = ({ data }) => {
  return (
    <CCard style={{ width: '90%', height: '9rem' }} className=" my-2">
      <CCardBody>
        <CRow>
          <CCardTitle>{data.nombre}</CCardTitle>
        </CRow>
        <CRow>
          <CCardSubtitle>Carrera correspondiente</CCardSubtitle>
          <CCardText>{data.especialidad}</CCardText>
        </CRow>
        <CRow className="my-2">
          <CCardSubtitle>Fecha</CCardSubtitle>
          <CCardText>2022</CCardText>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default ProjectsCards
