import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
import PropTypes from 'prop-types'
import ProjectsCardsAdmin from './ProjectsCardsAdmin'

const RegisterUserCard = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    birthYear: '',
    password: '',
    employeeId: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you can implement your logic to submit the form values
    console.log(formValues)
    setFormValues({
      firstName: '',
      lastName: '',
      middleName: '',
      email: '',
      birthYear: '',
      password: '',
      employeeId: '',
    })
  }

  const handleCancel = () => {
    setFormValues({
      firstName: '',
      lastName: '',
      middleName: '',
      email: '',
      birthYear: '',
      password: '',
      employeeId: '',
    })
  }

  return (
    <CCard>
      <CCardHeader>
        <CCardTitle className="pt-2">Agregar Usuario</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CRow>
            <CCol xs={12} md={4}>
              <CFormLabel>Nombre</CFormLabel>
              <CFormInput
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol xs={12} md={4}>
              <CFormLabel>Apellido Paterno</CFormLabel>
              <CFormInput
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol xs={12} md={4}>
              <CFormLabel>Apellido Materno</CFormLabel>
              <CFormInput
                type="text"
                name="middleName"
                value={formValues.middleName}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>

          <CRow>
            <CCol xs={12} md={4}>
              <CFormLabel>Año de Nacimiento</CFormLabel>
              <CFormInput
                type="number"
                name="birthYear"
                value={formValues.birthYear}
                onChange={handleInputChange}
              />
            </CCol>

            <CCol xs={12} md={4}>
              <CFormLabel>Matrícula de Empleado</CFormLabel>
              <CFormInput
                type="text"
                name="employeeId"
                value={formValues.employeeId}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol xs={12} md={4}>
              <CFormLabel>Correo</CFormLabel>
              <CFormInput
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol xs={12} md={4}>
              <CFormLabel>Contraseña</CFormLabel>
              <CFormInput
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>
          <CRow className="pt-4 ">
            <CCol className="d-flex justify-content-end gap-4">
              <CButton type="button" color="secondary" onClick={handleCancel}>
                Cancelar
              </CButton>
              <CButton type="submit" color="primary" className="mr-2">
                Crear
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

RegisterUserCard.propTypes = {
  data: PropTypes.string.isRequired, // Add the missing prop type validation
}

export default RegisterUserCard
