import React, { useState } from 'react'
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
  CImage,
  CCardTitle,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useNavigate } from 'react-router-dom'
import { cilLockLocked, cilUser } from '@coreui/icons'
import its from '../../../assets/brand/its.png'

const SelectList = ({ data, defaultText }) => {
  return (
    <CInputGroup className="mb-3">
      <CInputGroupText>
        <CIcon icon={cilUser} />
      </CInputGroupText>
      <CFormSelect aria-label="Default select example">
        <option>{defaultText}</option>
        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </CFormSelect>
    </CInputGroup>
  )
}

const Login = () => {
  const navigate = useNavigate()
  const [type, setType] = useState('students')

  const careers = [
    { value: '1', label: 'Ingenieria en sistemas computacionales' },
    { value: '2', label: 'Ingenieria en electrica' },
    { value: '3', label: 'Ingenieria en electronica' },
    { value: '4', label: 'Ingenieria en mecatronica' },
    { value: '5', label: 'Ingenieria en industrial' },
    { value: '6', label: 'Ingenieria en gestion empresarial' },
    { value: '7', label: 'Ingenieria en materiales' },
    { value: '8', label: 'Ingenieria en mecanica' },
  ]
  const departments = [
    { value: '1', label: 'Departamento de sistemas y computacion' },
    { value: '2', label: 'Departamento de electrica y electronica' },
    { value: '3', label: 'Departamento de industrial' },
    { value: '4', label: 'Departamento de mecatronica' },
    { value: '5', label: 'Departamento de gestion empresarial' },
  ]
  const genres = [
    { value: '1', label: 'Masculino' },
    { value: '2', label: 'Femenino' },
    { value: '3', label: 'Otro' },
  ]

  const semestres = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
  ]

  const handleSelect = (e) => {
    setType(e.target.value)
  }

  const handleLogin = () => {
    navigate(`/dashboard`)
  }

  const handleToAdmin = () => {
    navigate(`/login`)
  }

  return (
    <div className="bg-light min-vh-100 d-flex  flex-row  ">
      <CContainer>
        <CRow className="vh-100 justify-content-center align-items-center">
          <CCol md={8}>
            <CCardGroup className="d-flex flex-column-reverse flex-lg-row">
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Bienvenidos al centro de informacion</h1>
                    <p className="text-medium-emphasis">Seleccione sus datos</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormSelect
                        onChange={handleSelect}
                        value={type}
                        aria-label="Default select example"
                      >
                        <option>Abre para ver las opciones</option>
                        <option value="students">Alumnos</option>
                        <option value="employees">Empleados</option>
                      </CFormSelect>
                    </CInputGroup>
                    {type === 'students' ? (
                      <>
                        <SelectList data={careers} defaultText={'Carrera'} />
                        <SelectList data={semestres} defaultText={'Semestre'} />
                      </>
                    ) : (
                      <SelectList data={departments} defaultText={'Departamento'} />
                    )}
                    <SelectList data={genres} defaultText={'Genero'} />
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
              <CCard className="text-white p-4" style={{ backgroundColor: '#3C4B64' }}>
                <CCardBody className="d-flex flex-column align-items-center">
                  <CCardTitle>Centro de Informacíon</CCardTitle>
                  <CImage fluid src={its} />
                  <div className="d-flex justify-content-end">
                    <CButton color="primary" onClick={handleToAdmin}>
                      Adminitracíon
                    </CButton>
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

export default Login
