import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Access = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>REGISTRO</h1>
                    <p className="text-medium-emphasis">Regístrese para continuar</p>
                    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                      <option>Genero</option>
                      <option value="1">Masculino</option>
                      <option value="2">Femenino</option>
                      <option value="3">Prefiero no contestar</option>
                    </CFormSelect>
                    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                      <option>Empleado</option>
                      <option value="1">Alumno</option>
                      <option value="1">Docente</option>
                      <option value="2">No docente</option>
                      <option value="3">Administrativo</option>
                      <option value="4">Externo</option>
                    </CFormSelect>
                    <CInputGroup className="mb-3">
                      <CFormInput placeholder="Semestre" autoComplete="semestre" />
                    </CInputGroup>
                    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                      <option>Carrera</option>
                      <option value="1">Informatica</option>
                      <option value="2">Administración</option>
                      <option value="3">Electrica</option>
                      <option value="4">Electronica</option>
                      <option value="5">Mecanica</option>
                      <option value="6">Materiales</option>
                      <option value="7">Sistemas computacionales</option>
                      <option value="8">Mecatronica</option>
                      <option value="9">Ing. gestion empresarial</option>
                      <option value="10">Ingenieria industrial</option>
                      <option value="11">Ing. en sistemas </option>
                      <option value="13">Computacionales</option>
                      <option value="14">Ingenieria mecanica</option>
                      <option value="15">Ingenieria en electronica</option>
                      <option value="16">Ingenieria electrica</option>
                      <option value="17">Ingenieria en materiales</option>
                    </CFormSelect>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="#3C4B64" className="px-4">
                          Ingresar
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white" style={{ backgroundColor: '#3C4B64', width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Centro de informacion</h2>
                    <p>
                      <img src="../../../../src/assets/brand/its.png" alt="Imagen ITS" />
                    </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Access
