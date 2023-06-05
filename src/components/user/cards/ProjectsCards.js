import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CRow,
} from '@coreui/react'
import PropTypes from 'prop-types'

const ProjectsCards = ({ data }) => {
  return (
    <CCard style={{ height: '12rem' }} className=" my-2">
      <CCardHeader className="d-flex justify-content-between">
        <CCardTitle style={{ paddingTop: '5px' }}>{data.nombre}</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CRow className="pb-2">
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

ProjectsCards.propTypes = {
  data: PropTypes.string.isRequired, // Add the missing prop type validation
}

export default ProjectsCards
