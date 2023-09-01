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
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import its from '../../../assets/brand/its.png'
import { useAuth } from '../../../context/AuthProvider'

const Access = () => {
  const navigate = useNavigate()

  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    login({ email, password })
    //navigate(`/dashboard-admin`)
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
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Email"
                        autoComplete="Email"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" onClick={handleLogin}>
                          Ingresar
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white" style={{ backgroundColor: '#3C4B64' }}>
                <CCardBody className="d-flex flex-column align-items-center">
                  <CCardTitle>Centro de Informacíon</CCardTitle>
                  <CImage fluid src={its} />
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
