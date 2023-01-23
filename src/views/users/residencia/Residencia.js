import React from 'react'
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
  return (
    <>
      <CContainer>
        {/* este es para el filtro*/}
        <CRow>
          <CCol xs={4}>
            <CCard style={{ width: '80%', height: '13rem' }}>
              <CCardBody>
                <CFormInput placeholder="Buscador" />
                {/* Aqui esta la barrita buscadora de fechas*/}
                <CFormSelect aria-label="Default select example" className=" my-3">
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
              </CCardBody>
            </CCard>
          </CCol>
          <CCol>
            {/* este es para cada tarjeta*/}
            {arr.map((data) => {
              return (
                <CRow key={data.id}>
                  <CCol>
                    <CCard style={{ width: '90%', height: '9rem' }} className=" my-2">
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
