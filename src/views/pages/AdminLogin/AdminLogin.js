import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  CImage,
  CCardTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import its from '../../../assets/brand/its.png'

const Access = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    navigate(`/dashboard-admin`)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="d-flex justify-content-center">
          <CCol md={8}>
            <CCardGroup className="d-flex flex-column-reverse flex-lg-row">
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Iniciar sesion</h1>
                    <p className="text-medium-emphasis">Ingresa los datos para entrar</p>
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
              <CCard className="text-white" style={{ backgroundColor: '#3C4B64' }}>
                <CCardBody className="d-flex flex-column align-items-center">
                  <CImage fluid src={its} />
                  <CCardTitle>Centro de Informacíon</CCardTitle>
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
