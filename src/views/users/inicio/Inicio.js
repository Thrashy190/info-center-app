import React from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CCard,
  CCardBody,
  CCardTitle,
  CCarousel,
  CCarouselItem,
  CCardSubtitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import {
  cilMemory,
  cilCode,
  cilQrCode,
  cilBarChart,
  cilDescription,
  cilBeaker,
  cilBolt,
  cilCarAlt,
} from '@coreui/icons'

const Inicio = () => {
  const carreras = [
    {
      nombre: 'Sistemas computacionales',
      icono: cilCode,
      recomendaciones: [
        { nombre: 'java', autor: 'Diego' },
        { nombre: 'Matematicas', autor: 'Diego' },
      ],
    },
    {
      nombre: 'Mecatronica',
      icono: cilQrCode,
      recomendaciones: [
        { nombre: 'java', autor: 'Diego' },
        { nombre: 'Matematicas', autor: 'Diego' },
      ],
    },
    {
      nombre: 'Mecanica',
      icono: cilCarAlt,
      recomendaciones: [
        { nombre: 'java', autor: 'Diego' },
        { nombre: 'Matematicas', autor: 'Diego' },
      ],
    },
    {
      nombre: 'Electrica',
      icono: cilBolt,
      recomendaciones: [
        { nombre: 'java', autor: 'Diego' },
        { nombre: 'Matematicas', autor: 'Diego' },
      ],
    },
    {
      nombre: 'Electronica',
      icono: cilMemory,
      recomendaciones: [
        { nombre: 'java', autor: 'Diego' },
        { nombre: 'Matematicas', autor: 'Diego' },
      ],
    },
    {
      nombre: 'Industrial',
      icono: cilDescription,
      recomendaciones: [
        { nombre: 'java', autor: 'Diego' },
        { nombre: 'Matematicas', autor: 'Diego' },
      ],
    },
    {
      nombre: 'Gestion Empresarial',
      icono: cilBarChart,
      recomendaciones: [
        { nombre: 'java', autor: 'Diego' },
        { nombre: 'Matematicas', autor: 'Diego' },
      ],
    },
    {
      nombre: 'Material',
      icono: cilBeaker,
      recomendaciones: [
        { nombre: 'java', autor: 'Diego' },
        { nombre: 'Matematicas', autor: 'Diego' },
      ],
    },
  ]

  return (
    <>
      <CContainer>
        <CRow className="pb-5">
          <CCol>
            <h1>!Bienvenido¡</h1>
          </CCol>
        </CRow>
        <CRow className="pb-4 text-medium-emphasis">
          <CCol>
            <h2>Recomendados</h2>
          </CCol>
        </CRow>

        {carreras.map(({ nombre, icono, recomendaciones }) => {
          return (
            <CRow key={this} className="pb-4 pb-xs-5">
              <CCol xs={12} md={6} lg={5} xl={4} xxl={3} className="pb-2">
                <CCard style={{ width: '100%', height: '13.50rem' }}>
                  <CCardBody className="d-flex flex-column align-items-center">
                    <CIcon icon={icono} size={'8xl'} />
                    <CCardTitle className="pt-4">{nombre}</CCardTitle>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs={12} md={6} lg={7} xl={8} xxl={9}>
                <CCarousel controls indicators dark>
                  {recomendaciones.map(({ nombre, autor }) => {
                    return (
                      <CCarouselItem key={this}>
                        <CCard style={{ width: '100%', height: '13.50rem' }}>
                          <CCardBody className="d-flex flex-column align-items-center">
                            <CCardTitle className="pt-4 fs-1">{nombre}</CCardTitle>
                            <CCardSubtitle className="pt-4 fs-3 text-medium-emphasis">
                              {autor}
                            </CCardSubtitle>
                          </CCardBody>
                        </CCard>
                      </CCarouselItem>
                    )
                  })}
                </CCarousel>
              </CCol>
            </CRow>
          )
        })}
      </CContainer>
    </>
  )
}

export default Inicio
