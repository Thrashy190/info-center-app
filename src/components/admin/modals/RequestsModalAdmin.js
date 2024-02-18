import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardSubtitle,
  CCardTitle,
  CCol,
  CContainer,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow,
} from '@coreui/react'

const RequestsModalAdmin = ({ showModal, setShowModal, reviewRequest }) => {
  const [bookList, setBookList] = useState([
    { titulo: 'holea', autor: '1kpwnf', year: 200 },
    { titulo: 'holea', autor: '1kpwnf', year: 200 },
  ])
  return (
    <CModal
      size="xl"
      alignment="center"
      visible={showModal}
      onClose={() => {
        setShowModal(false)
      }}
    >
      <CModalHeader
        onClose={() => {
          setShowModal(false)
        }}
        closeButton
      >
        Revisión de solicitud
      </CModalHeader>
      <CModalBody>
        <CContainer>
          <CRow className="pb-4">
            <CCol xs={12} className="pb-2">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut neque in leo laoreet
                luctus.
              </div>
            </CCol>
          </CRow>
          <CRow className="pb-4 text-medium-emphasis">
            {bookList.map((book) => {
              return (
                <CCol xs={12} md={6} xxl={3} className="pb-2" key={this}>
                  <CCard style={{ width: '100%', height: '18rem' }}>
                    <CCardHeader className="d-flex justify-content-end"></CCardHeader>

                    <CCardBody className="d-flex flex-column">
                      <CCardTitle className="pb-1">Libro:</CCardTitle>
                      <CCardSubtitle className="pb-4">{book.titulo} </CCardSubtitle>
                      <CCardTitle className="pb-1">Autor:</CCardTitle>
                      <CCardSubtitle className="pb-4"> {book.autor} </CCardSubtitle>
                      <CCardTitle className="pb-1">Fecha de publicacion:</CCardTitle>
                      <CCardSubtitle className="pb-4"> {book.year} </CCardSubtitle>
                    </CCardBody>
                  </CCard>
                </CCol>
              )
            })}
          </CRow>
        </CContainer>
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          onClick={() => {
            setShowModal(false)
          }}
        >
          Cerrar
        </CButton>
        <CButton color="primary">Marcar como revisado</CButton>
      </CModalFooter>
    </CModal>
  )
}

export default RequestsModalAdmin
