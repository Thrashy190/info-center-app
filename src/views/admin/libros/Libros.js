import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CRow,
  CCol,
  CContainer,
  CCardSubtitle,
  CPagination,
  CPaginationItem,
  CFormInput,
  CFormCheck,
  CFormSelect,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'

const Libros = () => {
  function rangeYear() {
    const max = new Date().getFullYear()
    const min = 1900
    const years = []

    for (let i = max; i >= min; i--) {
      years.push(i)
    }
    return years
  }
  const arr = [
    { nombre: 'Titulo 1', autor: 'nombre', id: 1 },
    { nombre: 'Titulo 2', autor: 'nombre', id: 2 },
    { nombre: 'Titulo 3', autor: 'nombre', id: 3 },
  ]

  const [visible, setVisible] = useState(false)

  return (
    <>
      <CContainer>
        {/* este es para el filtro*/}
        <CRow>
          <CCol xs={4}>
            <CCard style={{ width: '80%', height: '14rem' }}>
              <CCardBody>
                <CFormInput placeholder="Buscador" />
                {/* Aqui esta la barrita buscadora*/}
                <CFormSelect aria-label="Default select example" className=" my-3">
                  <option>Fecha</option>
                  {rangeYear().map((year) => {
                    return (
                      <option value={year} key={year}>
                        {year}
                      </option>
                    )
                  })}
                </CFormSelect>
                <CFormCheck className=" my-3" id="flexCheckDefault" label="Disponible" />
                {/* botton de disponibilidad */}
                <CButton>Agregar libro</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol>
            {/* este es para cada tarjeta*/}
            {arr.map((data) => {
              return (
                <CRow key={data.id}>
                  <CCol>
                    <CCard style={{ width: '90%', height: '12rem' }} className=" my-2">
                      <CCardBody>
                        <CRow>
                          <CCardTitle>{data.nombre}</CCardTitle>
                        </CRow>
                        <CRow>
                          <CCardSubtitle>Autor</CCardSubtitle>
                          <CCardText>{data.autor}</CCardText>
                        </CRow>
                        <CRow>
                          <CCol>
                            <CCardSubtitle>Fecha de publicación</CCardSubtitle>
                            <CCardText>{data.autor}</CCardText>
                          </CCol>
                          <CCol>
                            <CCardSubtitle>IBSN/ISSN</CCardSubtitle>
                            <CCardText>{data.autor}</CCardText>
                          </CCol>
                          <CRow className="my-2">
                            {/* botones de la tarjeta */}
                            <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                              {/* boton para eliminar */}
                              <CButton color="danger" className="me-md-2">
                                Eliminar
                              </CButton>
                              {/* boton para modificaar */}
                              <CButton onClick={() => setVisible(!visible)}>Modificar</CButton>
                            </div>
                            {/* modal de la tarjeta */}
                            <CModal
                              alignment="center"
                              visible={visible}
                              onClose={() => setVisible(false)}
                            >
                              <CModalHeader onClose={() => setVisible(false)}>
                                <CModalTitle alignment="center">Agregar un libro</CModalTitle>
                              </CModalHeader>
                              <CModalBody>
                                <CRow>
                                  <CCol>
                                    <span>Titulo</span>
                                    <CFormInput className=" my-2" placeholder="Titulo" />
                                  </CCol>
                                </CRow>
                                <CRow>
                                  <CCol>
                                    <span>Autor/es</span>
                                    <CFormInput className=" my-2" placeholder="Autor/es" />
                                  </CCol>
                                </CRow>
                                <CRow>
                                  <CCol>
                                    <span>Fecha de publicación</span>
                                    <CFormSelect
                                      aria-label="Default select example"
                                      className=" my-2"
                                    >
                                      {rangeYear().map((year) => {
                                        return (
                                          <option value={year} key={year}>
                                            {year}
                                          </option>
                                        )
                                      })}
                                    </CFormSelect>{' '}
                                  </CCol>
                                  <CCol>
                                    <span>ISBN/ISSN</span>
                                    <CFormInput className=" my-2" placeholder="ISBN/ISSN" />
                                  </CCol>
                                </CRow>
                              </CModalBody>
                              <CModalFooter>
                                {/* Botones del modal */}
                                <CButton
                                  className="d-flex justify-content-center"
                                  onClick={() => setVisible(false)}
                                >
                                  Cancelar
                                </CButton>
                                <CButton color="primary">Actualizar</CButton>
                              </CModalFooter>
                            </CModal>
                          </CRow>
                        </CRow>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              )
            })}
          </CCol>
        </CRow>
      </CContainer>
      {/* aqui esta la pagincación */}
      <CPagination aria-label="Page navigation example" className="justify-content-center">
        <CPaginationItem>Previous</CPaginationItem>
        <CPaginationItem>1</CPaginationItem>
        <CPaginationItem>2</CPaginationItem>
        <CPaginationItem>3</CPaginationItem>
        <CPaginationItem>Next</CPaginationItem>
      </CPagination>
    </>
  )
}

export default Libros
