import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderDivider,
  CHeaderToggler,
  CFormInput,
  CFormSelect,
  CButton,
  CRow,
  CCol,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu, cilUser } from '@coreui/icons'

import { AppBreadcrumb } from './index'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CRow>
          <CCol xs={12} md={6} className="mb-2">
            <CFormInput
              style={{ width: '100%' }}
              type="email"
              id="floatingInput"
              floatingLabel="¿Qué estas buscando?"
              placeholder="¿Qué estas buscando?"
            />
          </CCol>
          <CCol xs={12} md={3} className="mb-2">
            <CFormSelect
              style={{ width: '100%', height: '100%' }}
              aria-label="Default select example"
            >
              <option value="1">Libros</option>
              <option value="2">Tesis</option>
              <option value="3">Proyectos de residencias</option>
            </CFormSelect>
          </CCol>
          <CCol xs={12} md={3} className="mb-2">
            <CButton color="dark" style={{ width: '100%', height: '100%' }}>
              Buscar
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
