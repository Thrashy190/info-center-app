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

const AddTesisCard = () => {
  const [formValues, setFormValues] = useState({
    year: '',
    project_name: '',
    careers_id: '',
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
      year: '',
      project_name: '',
      careers_id: '',
    })
  }

  return (
    <CCard>
      <CCardHeader>
        <CCardTitle className="pt-2">Agregar Tesis</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CRow>
            <CCol xs={12} md={4}>
              <CFormLabel>Titulo</CFormLabel>
              <CFormInput
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol xs={12} md={4}>
              <CFormLabel>Identificador</CFormLabel>
              <CFormInput
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>

          <CRow>
            <CCol xs={12} md={4}>
              <CFormLabel>Año de publicacion</CFormLabel>
              <CFormInput
                type="number"
                name="birthYear"
                value={formValues.birthYear}
                onChange={handleInputChange}
              />
            </CCol>

            <CCol xs={12} md={4}>
              <CFormLabel>Especialidad</CFormLabel>
              <CFormInput
                type="text"
                name="employeeId"
                value={formValues.employeeId}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>
          <CRow className="pt-4 ">
            <CCol className="d-flex justify-content-end gap-4">
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

export default AddTesisCard
