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

const AddOthersCard = () => {
  const [formValues, setFormValues] = useState({
    name: '',
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
      name: '',
    })
  }
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <CCardTitle className="pt-2">Agregar Especialidad</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CRow>
                <CCol xs={12} md={4}>
                  <CFormLabel>Nombre</CFormLabel>
                  <CFormInput
                    type="text"
                    name="name"
                    value={formValues.name}
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
      </CCol>
      <CCol>
        <CCard>
          <CCardHeader>
            <CCardTitle className="pt-2">Agregar Departamento</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CRow>
                <CCol xs={12} md={4}>
                  <CFormLabel>Nombre</CFormLabel>
                  <CFormInput
                    type="text"
                    name="name"
                    value={formValues.name}
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
      </CCol>
    </CRow>
  )
}

export default AddOthersCard
