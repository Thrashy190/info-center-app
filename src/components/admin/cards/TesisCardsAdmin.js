import React, { useState } from 'react'
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

import TesisModalsAdmin from '../modals/TesisModalsAdmin'
import OptionsCardsMenu from '../menu/OptionsCardsMenu'
import DeleteModalsAdmin from '../modals/DeleteModalsAdmin'
import PropTypes from 'prop-types'

const TesisCardsAdmin = ({ data }) => {
  const [visible, setVisible] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)

  return (
    <CCard style={{ height: '13rem' }} className="mb-4 mt-2">
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
      <TesisModalsAdmin visible={visible} setVisible={setVisible} />
      <DeleteModalsAdmin
        type="Tesis"
        id={data.id}
        visibleDelete={visibleDelete}
        setVisibleDelete={setVisibleDelete}
      />
    </CCard>
  )
}

TesisCardsAdmin.propTypes = {
  data: PropTypes.string.isRequired, // Add the missing prop type validation
}

export default TesisCardsAdmin
