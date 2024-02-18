import React from 'react'
import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import { rangeYear } from '../../../helpers/date'
import PropTypes from 'prop-types'

const BooksModalsAdmin = ({ visible, setVisible }) => {
  return (
    <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle alignment="center">Modificar libro</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow>
          <CCol>
            <span>Titulo</span>
            <CFormInput className=" my-2" placeholder="Titulo" />
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <span>Autor</span>
            <CFormInput className=" my-2" placeholder="Autor/es" />
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <span>Fecha de publicación</span>
            <CFormSelect aria-label="Default select example" className=" my-2">
              {rangeYear().map((year) => {
                return (
                  <option value={year} key={year}>
                    {year}
                  </option>
                )
              })}
            </CFormSelect>
          </CCol>
          <CCol>
            <span>Clasificación</span>
            <CFormInput className=" my-2" placeholder="Clasificacion" />
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <span>Tipo</span>
            <CFormSelect aria-label="Default select example" className=" my-2">
              <option value="1">Libro</option>
              <option value="2">Manual</option>
            </CFormSelect>
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter>
        {/* Botones del modal */}
        <CButton className="d-flex justify-content-center" onClick={() => setVisible(false)}>
          Cancelar
        </CButton>
        <CButton color="primary">Actualizar</CButton>
      </CModalFooter>
    </CModal>
  )
}
BooksModalsAdmin.propTypes = {
  visible: PropTypes.bool.isRequired, // Add the missing prop type validation
  setVisible: PropTypes.func.isRequired, // Add the missing prop type validation
}

export default BooksModalsAdmin
