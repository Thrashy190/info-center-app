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

const carreras = [
  { id: 1, nombre: 'Informatica' },
  { id: 2, nombre: 'Administración' },
  { id: 3, nombre: 'Electrica' },
  { id: 4, nombre: 'Electronica' },
  { id: 5, nombre: 'Mecanica' },
  { id: 6, nombre: 'Materiales' },
  { id: 7, nombre: 'Sistemas computacionales' },
  { id: 8, nombre: 'Mecatronica' },
  { id: 9, nombre: 'Ing. gestion empresarial' },
  { id: 10, nombre: 'Ingenieria en sistemas computacionales' },
]
const ProjectsModalsAdmin = ({ visible, setVisible }) => {
  return (
    <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle alignment="center">Agregar un proyecto</CModalTitle>
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
            <span>Especialidad</span>
            <CFormSelect size="sm" className="my-2" aria-label="Small select example">
              <option>Especialidad</option>
              {carreras.map((carrera) => {
                return (
                  <option value={carrera.id} key={carrera.id}>
                    {carrera.nombre}
                  </option>
                )
              })}
            </CFormSelect>
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
            </CFormSelect>{' '}
          </CCol>
          <CCol></CCol>
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

ProjectsModalsAdmin.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
}

export default ProjectsModalsAdmin
