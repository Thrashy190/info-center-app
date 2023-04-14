import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CRow,
} from '@coreui/react'

import ProjectsModalsAdmin from '../modals/ProjectsModalsAdmin'
import OptionsCardsMenu from '../menu/OptionsCardsMenu'
import DeleteModalsAdmin from '../modals/DeleteModalsAdmin'

const ProjectsCardsAdmin = ({ data }) => {
  const [visible, setVisible] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)

  return (
    <CCard style={{ height: '12rem' }} className="mb-4 mt-2">
      <CCardHeader className="d-flex justify-content-between">
        <CCardTitle style={{ paddingTop: '5px' }}>{data.nombre}</CCardTitle>
        <OptionsCardsMenu
          visible={visible}
          setVisible={setVisible}
          visibleDelete={visibleDelete}
          setVisibleDelete={setVisibleDelete}
        />
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
      <ProjectsModalsAdmin visible={visible} setVisible={setVisible} />
      <DeleteModalsAdmin
        type="proyecto"
        id={data.id}
        visibleDelete={visibleDelete}
        setVisibleDelete={setVisibleDelete}
      />
    </CCard>
  )
}

export default ProjectsCardsAdmin
