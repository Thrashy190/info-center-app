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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'

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
        <div className="d-flex flex-row d-grid gap-4">
          <CFormInput
            style={{ width: '30rem' }}
            type="email"
            id="floatingInput"
            floatingLabel="¿Qué estas buscando?"
            placeholder="¿Qué estas buscando?"
          />
          <CFormSelect style={{ width: '10rem' }} aria-label="Default select example">
            <option value="1">Libros</option>
            <option value="2">Tesis</option>
            <option value="3">Proyectos de residencias</option>
          </CFormSelect>
          <CButton color="dark" style={{ width: '10rem' }}>
            Buscar
          </CButton>
        </div>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
