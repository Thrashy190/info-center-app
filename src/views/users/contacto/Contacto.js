/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { CCol, CRow, CContainer, CCard, CCardImage } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibFacebook } from '@coreui/icons'

import alfa from '../../../assets/brand/alfa.jpg'
import ebsco from '../../../assets/brand/Ebsco.jpg'
import elibro from '../../../assets/brand/elibro.png'

const Contacto = () => {
  const contacto = [
    { titulo: 'Correo', text: 'correo@correo.com', url: 'mailto:diego.456.dlm77@gmail.com' },
    { titulo: 'Telefono', text: '8441039924', url: 'tel:+528441039924' },
    {
      titulo: 'Redes',
      icon: <CIcon icon={cibFacebook} size={'3xl'} />,
      url: 'https://www.facebook.com/CentrodeInformacionITS',
    },
    { titulo: 'Pagina oficial', text: 'its.mx', url: 'https://saltillo.tecnm.mx/' },
  ]

  const eLibrerias = [
    { logo: alfa, url: 'https://itsaltillo.bibliotecasdigitales.com/auth/login' },
    {
      logo: ebsco,
      url: 'https://search.ebscohost.com/login.aspx?authtype=ip,uid&custid=ns108666&groupid=main&profile=ehost',
    },
    {
      logo: elibro,
      url: 'https://elibro.net/es/lc/itsaltillo/login_usuario/?next=/es/lc/itsaltillo/inicio/',
    },
  ]

  const horario = [
    { dia: 'Lunes', hora: '7:00 - 21:00' },
    { dia: 'Martes', hora: '7:00 - 21:00' },
    { dia: 'Miercoles', hora: '7:00 - 21:00' },
    { dia: 'Jueves', hora: '7:00 - 21:00' },
    { dia: 'Viernes', hora: '7:00 - 21:00' },
    { dia: 'Sabado', hora: 'CERRADO' },
    { dia: 'Domingo', hora: 'CERRADO' },
  ]

  return (
    <>
      <CContainer>
        <CRow className="pb-4">
          <CCol>
            <h1>Nos encantaría apoyarte, Contactanos</h1>
          </CCol>
        </CRow>
        <CRow className="pb-5">
          {contacto.map(({ titulo, text, icon, url }) => {
            return (
              <CCol md={12} lg={3} key={this} className="d-flex flex-column align-items-start py-2">
                <h4 className="pb-1">{titulo}</h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={url}
                  className="text-medium-emphasis pb-2 fs-5"
                >
                  {text && text}
                  {icon && icon}
                </a>
              </CCol>
            )
          })}
        </CRow>
        <CRow className="pb-5">
          <CCol md={12} lg={5} className="pb-4">
            <h4 className="pb-2">Horario</h4>
            {horario.map(({ dia, hora }) => {
              return (
                <CRow key={this}>
                  <CCol xs={5}>
                    <span className="text-medium-emphasis pb-2 fs-5">{dia}</span>
                  </CCol>
                  <CCol xs={5}>
                    <span className="text-medium-emphasis pb-2 fs-5">{hora}</span>
                  </CCol>
                </CRow>
              )
            })}
          </CCol>
          <CCol md={12} lg={7}>
            <h4 className="pb-2">Mapa</h4>
            <iframe
              width="100%"
              height="300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.7175462978296!2d-100.99330417076725!3d25.442603210025673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86886d59eb5bc4d3%3A0x60771ba46d37358c!2sInstituto%20Tecnol%C3%B3gico%20de%20Saltillo!5e0!3m2!1ses-419!2smx!4v1674170376211!5m2!1ses-419!2smx"
            >
              <a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a>
            </iframe>
          </CCol>
        </CRow>
        <CRow className="pb-4">
          <CCol>
            <h4 className="pb-1">Biblioteca Virtual</h4>
          </CCol>
        </CRow>
        <CRow className="pb-4">
          {eLibrerias.map(({ logo, url }) => {
            return (
              <CCol xs={12} lg={4} key={this} className="pb-4">
                <a href={url}>
                  <CCard
                    style={{ width: '100%', height: '100%' }}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <CCardImage style={{ width: '50%' }} src={logo} />
                  </CCard>
                </a>
              </CCol>
            )
          })}
        </CRow>
      </CContainer>
    </>
  )
}

export default Contacto
