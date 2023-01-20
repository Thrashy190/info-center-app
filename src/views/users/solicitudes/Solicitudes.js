import React, { useState } from 'react'

import {
  CCol,
  CRow,
  CContainer,
  CCard,
  CCardBody,
  CCardTitle,
  CFormTextarea,
  CForm,
  CModalHeader,
  CModalFooter,
  CModalTitle,
  CButton,
  CModalBody,
  CCloseButton,
  CCardHeader,
  CCardSubtitle,
  CModal,
  CFormInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'

const Solicitudes = () => {
  const [visible, setVisible] = useState(false)

  const [description, setDescription] = useState('')
  const [bookInfo, setBookInfo] = useState({})
  const [bookList, setBookList] = useState([])

  const deleteBookFromList = (nombre) => {
    const copia = [...bookList]
    let indiceABorrar = copia.findIndex((block) => nombre === block.nombre)
    copia.splice(indiceABorrar, 1)
    setBookList(copia)
  }

  const addBooktoList = () => {
    setBookList([...bookList, bookInfo])
  }

  const handleDescription = (data) => {
    setDescription(data)
  }

  const handleBookInfo = (e) => {
    setBookInfo({ ...bookInfo, [e.target.name]: e.target.value })
  }

  return (
    <>
      <CContainer>
        <CRow className="pb-4">
          <CCol xs={12} className="pb-2">
            <h1>Solicita libros no disponibles</h1>
          </CCol>
        </CRow>
        <CRow className="pb-4 text-medium-emphasis">
          <CCol>
            <h4>Solicita libros que no se encuentren en la lista del centro de informacion</h4>
          </CCol>
        </CRow>
        <CRow className="pb-4 text-medium-emphasis">
          <CCol>
            <CForm>
              <CFormTextarea
                id="descriptionTextTarea"
                label="Escribe aqui que podemos hacer por ti"
                rows={3}
                onChange={(e) => handleDescription(e.target.value)}
              ></CFormTextarea>
            </CForm>
          </CCol>
        </CRow>
        <CRow className="pb-4 text-medium-emphasis">
          <CCol>
            <h4>Agrega informacion sobre los libros aqui:</h4>
          </CCol>
        </CRow>
        <CRow className="pb-4 text-medium-emphasis">
          {bookList.map((book) => {
            return (
              <CCol xs={12} md={6} xxl={3} className="pb-2" key={this}>
                <CCard style={{ width: '100%', height: '18rem' }}>
                  <CCardHeader className="d-flex justify-content-end">
                    <CCloseButton onClick={() => deleteBookFromList(book.nombre)} />
                  </CCardHeader>

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

          {bookList.length < 4 && (
            <>
              <CCol>
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                  style={{
                    border: '2px solid',
                    width: '100%',
                    height: '18rem',
                    borderStyle: 'dashed',
                    cursor: 'pointer',
                  }}
                  onClick={() => setVisible(!visible)}
                >
                  <div
                    className="d-flex justify-content-center align-items-center mb-1"
                    style={{
                      border: '5px solid',
                      borderRadius: '50%',
                      width: '7rem',
                      height: '7rem',
                    }}
                  >
                    <CIcon icon={cilPlus} size={'6xl'} />
                  </div>
                  <h5 className="text-medium-emphasis pb-2">Agregar libro</h5>
                </div>
              </CCol>
              <CModal
                size="md"
                alignment="center"
                visible={visible}
                onClose={() => setVisible(false)}
              >
                <CModalHeader>
                  <CModalTitle>Informacion de libro</CModalTitle>
                </CModalHeader>
                <CModalBody className="d-grid gap-4 my-4">
                  <CFormInput
                    type="text"
                    id="titulo"
                    name="titulo"
                    floatingLabel="Nombre del libro"
                    placeholder="Nombre del libro"
                    onChange={(e) => handleBookInfo(e)}
                  />
                  <CFormInput
                    type="text"
                    id="autor"
                    name="autor"
                    floatingLabel="Autor del libro"
                    placeholder="Autor del libro"
                    onChange={(e) => handleBookInfo(e)}
                  />
                  <CFormInput
                    type="number"
                    id="year"
                    name="year"
                    floatingLabel="Año de publicacion"
                    placeholder="Año de publicacion"
                    onChange={(e) => handleBookInfo(e)}
                  />
                </CModalBody>
                <CModalFooter>
                  <CButton
                    color="primary"
                    onClick={() => {
                      addBooktoList()
                      setVisible(false)
                    }}
                  >
                    Save changes
                  </CButton>
                </CModalFooter>
              </CModal>
            </>
          )}
        </CRow>
        <CRow className="pt-4">
          <CCol xs={12} className="d-flex justify-content-center justify-content-lg-end">
            <CButton
              color="dark"
              className="fs-5 w-100"
              onClick={() => console.log({ descripcion: description, lista: bookList })}
            >
              Enviar solicitud
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default Solicitudes
