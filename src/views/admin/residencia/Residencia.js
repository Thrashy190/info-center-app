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

const Residencia = () => {
  function rangeYear() {
    const max = new Date().getFullYear()
    const min = 2019
    const years = []

    for (let i = max; i >= min; i--) {
      years.push(i)
    }
    return years
  }
  const arr = [
    { nombre: 'Titulo 1', especialidad: 'Sistemas', id: 1 },
    { nombre: 'Titulo 2', especialidad: 'Informatica', id: 2 },
    { nombre: 'Titulo 3', especialidad: 'Gestion', id: 3 },
  ]
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CContainer>
        {/* este es para el filtro*/}
        <CRow>
          <CCol xs={4}>
            <CCard style={{ width: '80%', height: '17rem' }}>
              <CCardBody>
                <CFormInput placeholder="Buscador" />
                {/* Aqui esta la barrita buscadora de fechas*/}
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
                {/* Aqui esta la barrita buscadora de especialidad*/}
                <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                  <option>Especialidad</option>
                  <option value="1">Informatica</option>
                  <option value="2">Administración</option>
                  <option value="3">Electrica</option>
                  <option value="4">Electronica</option>
                  <option value="5">Mecanica</option>
                  <option value="6">Materiales</option>
                  <option value="7">Sistemas computacionales</option>
                  <option value="8">Mecatronica</option>
                  <option value="9">Ing. gestion empresarial</option>
                  <option value="10">Ingenieria industrial</option>
                  <option value="11">Ing. en sistemas </option>
                  <option value="13">Computacionales</option>
                  <option value="14">Ingenieria mecanica</option>
                  <option value="15">Ingenieria en electronica</option>
                  <option value="16">Ingenieria electrica</option>
                  <option value="17">Ingenieria en materiales</option>
                </CFormSelect>
                <CFormCheck className=" my-3" id="flexCheckDefault" label="Disponible" />
                {/* botton de disponibilidad */}
                {/* modal */}
                <CButton alignment="center">Agregar proyecto</CButton>
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
                          <CCardSubtitle>Carrera correspondiente</CCardSubtitle>
                          <CCardText>{data.especialidad}</CCardText>
                        </CRow>
                        <CRow className="my-2">
                          <CCardSubtitle>Fecha</CCardSubtitle>
                          <CCardText>2022</CCardText>
                        </CRow>
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
                          {/* modal */}
                          <CModal
                            alignment="center"
                            visible={visible}
                            onClose={() => setVisible(false)}
                          >
                            <CModalHeader onClose={() => setVisible(false)}>
                              <CModalTitle alignment="center">Agregar un proyecto</CModalTitle>
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
                                  <span>Especialidad</span>
                                  <CFormSelect
                                    size="sm"
                                    className="my-2"
                                    aria-label="Small select example"
                                  >
                                    <option>Especialidad</option>
                                    <option value="1">Informatica</option>
                                    <option value="2">Administración</option>
                                    <option value="3">Electrica</option>
                                    <option value="4">Electronica</option>
                                    <option value="5">Mecanica</option>
                                    <option value="6">Materiales</option>
                                    <option value="7">Sistemas computacionales</option>
                                    <option value="8">Mecatronica</option>
                                    <option value="9">Ing. gestion empresarial</option>
                                    <option value="10">Ingenieria industrial</option>
                                    <option value="11">Ing. en sistemas </option>
                                    <option value="13">Computacionales</option>
                                    <option value="14">Ingenieria mecanica</option>
                                    <option value="15">Ingenieria en electronica</option>
                                    <option value="16">Ingenieria electrica</option>
                                    <option value="17">Ingenieria en materiales</option>
                                  </CFormSelect>
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
                                <CCol></CCol>
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

export default Residencia
