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

const AddBooksCard = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    year: '',
    clasification: '',
    author: '',
    isbn_issn: '',
    status: '',
    type: '',
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
      title: '',
      year: '',
      clasification: '',
      autor: '',
      isbn_issn: '',
      status: '',
      type: '',
    })
  }

  return (
    <CCard>
      <CCardHeader>
        <CCardTitle className="pt-2">Agregar Libros</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CRow>
            <CCol xs={12} md={4}>
              <CFormLabel>Titulo</CFormLabel>
              <CFormInput
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol xs={12} md={4}>
              <CFormLabel>Año/volumen</CFormLabel>
              <CFormInput
                type="number"
                name="year"
                value={formValues.year}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol xs={12} md={4}>
              <CFormLabel>Clasificacion</CFormLabel>
              <CFormInput
                type="text"
                name="clasification"
                value={formValues.clasification}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>

          <CRow>
            <CCol xs={12} md={4}>
              <CFormLabel>Autor</CFormLabel>
              <CFormInput
                type="number"
                name="author"
                value={formValues.author}
                onChange={handleInputChange}
              />
            </CCol>

            <CCol xs={12} md={4}>
              <CFormLabel>ISBN/ISSN</CFormLabel>
              <CFormInput
                type="text"
                name="isbn_issn"
                value={formValues.isbn_issn}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol xs={12} md={4}>
              <CFormLabel>Estado</CFormLabel>
              <CFormInput
                type="email"
                name="status"
                value={formValues.status}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol xs={12} md={4}>
              <CFormLabel>Tipo</CFormLabel>
              <CFormInput
                type="text"
                name="type"
                value={formValues.type}
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

export default AddBooksCard
