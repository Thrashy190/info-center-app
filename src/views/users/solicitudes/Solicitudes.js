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

import Notification from 'src/components/shared/notifications/Notifications'

const Solicitudes = () => {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [bookInfo, setBookInfo] = useState({})
  const [bookList, setBookList] = useState([])
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  })

  const deleteBookFromList = (nombre) => {
    const copia = [...bookList]
    let indiceABorrar = copia.findIndex((block) => nombre === block.nombre)
    copia.splice(indiceABorrar, 1)
    setBookList(copia)
  }

  const addBooktoList = () => {
    bookInfo.year = parseInt(bookInfo.year)

    setBookList([...bookList, bookInfo])
  }

  const handleDescription = (data) => {
    setDescription(data)
  }

  const handleEmail = (data) => {
    setEmail(data)
  }

  const handleBookInfo = (e) => {
    setBookInfo({ ...bookInfo, [e.target.name]: e.target.value })
  }

  const createRequest = async (data) => {
    let response
    const { description, request_info, email } = data

    console.log(JSON.stringify(data))
    try {
      response = await fetch(`${process.env.REACT_APP_BASE_URL}/public/requests/request`, {
        method: 'POST',
        headers: {
          Origin: 'http://localhost:3000',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    } catch (error) {
      setNotify({
        isOpen: true,
        message: error,
        type: 'danger',
      })
    }
    console.log(response)

    if (response?.ok) {
      setNotify({
        isOpen: true,
        message: 'Solicitud enviada con exito',
        type: 'success',
      })
    } else {
      setNotify({
        isOpen: true,
        message: 'Error al enviar la solicitud',
        type: 'danger',
      })
    }
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
            <h4>
              Solicita informacion o referencias de libros en especifico o que no se encuentren en
              la lista del centro de informacion
            </h4>
          </CCol>
        </CRow>
        <CRow className="pb-4 text-medium-emphasis">
          <CCol>
            <CForm>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                label="Email"
                placeholder="name@ejemplo.com"
                aria-describedby="exampleFormControlInputHelpInline"
                onChange={(e) => handleEmail(e.target.value)}
              />
            </CForm>
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
        <CRow className="pb-2 text-medium-emphasis">
          {bookList.map((book, index) => {
            return (
              <CCol xs={12} sm={6} xxl={3} className="pb-2" key={index}>
                <CCard style={{ width: '100%', height: '18rem' }}>
                  <CCardHeader className="d-flex justify-content-end">
                    <CCloseButton onClick={() => deleteBookFromList(book.nombre)} />
                  </CCardHeader>

                  <CCardBody className="d-flex flex-column">
                    <CCardTitle className="pb-1">Libro:</CCardTitle>
                    <CCardSubtitle className="pb-4">{book.book_name} </CCardSubtitle>
                    <CCardTitle className="pb-1">Autor:</CCardTitle>
                    <CCardSubtitle className="pb-4"> {book.author} </CCardSubtitle>
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
                    id="book_name"
                    name="book_name"
                    floatingLabel="Nombre del libro"
                    placeholder="Nombre del libro"
                    onChange={(e) => handleBookInfo(e)}
                  />
                  <CFormInput
                    type="text"
                    id="author"
                    name="author"
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
                    Guardar libros
                  </CButton>
                </CModalFooter>
              </CModal>
            </>
          )}
        </CRow>
        <CRow className="py-4">
          <CCol xs={12} className="d-flex justify-content-center justify-content-lg-end">
            <CButton
              color="dark"
              className="fs-5 w-100"
              onClick={() =>
                createRequest({ description: description, request_info: bookList, email: email })
              }
            >
              Enviar solicitud
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
      <Notification notify={notify} setNotify={setNotify} position={'top'} />
    </>
  )
}

export default Solicitudes
