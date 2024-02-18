import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
  CCardHeader,
} from '@coreui/react'

import OptionsCardsMenu from '../menu/OptionsCardsMenu'
import BooksModalsAdmin from '../modals/BooksModalsAdmin'
import DeleteModalsAdmin from '../modals/DeleteModalsAdmin'
import PropTypes from 'prop-types'

const BooksCardsAdmin = ({ data }) => {
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
      <BooksModalsAdmin visible={visible} setVisible={setVisible} />
      <DeleteModalsAdmin
        type="libro"
        id={data.id}
        visibleDelete={visibleDelete}
        setVisibleDelete={setVisibleDelete}
      />
    </CCard>
  )
}
BooksCardsAdmin.propTypes = {
  data: PropTypes.string.isRequired, // Add the missing prop type validation
}

export default BooksCardsAdmin
