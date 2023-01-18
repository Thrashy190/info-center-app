import React from 'react'
import { CCol, CRow, CContainer } from '@coreui/react'

const Inicio = () => {
  return (
    <>
      <CContainer>
        <CRow className="pb-3">
          <CCol>
            <h1>!Bienvenido¡</h1>
          </CCol>
        </CRow>
        <CRow className="pb-2">
          <CCol>
            <h2>Recomendados</h2>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <h2>Recomendados</h2>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default Inicio
