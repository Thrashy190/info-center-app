import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilHome,
  cilPhone,
  cilFolderOpen,
  cilBook,
  cilBookmark,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _userNav = [
  {
    component: CNavItem,
    name: 'Inicio',
    to: '/inicio',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Contenido',
  },
  {
    component: CNavItem,
    name: 'Libros',
    to: '/libros',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Tesis',
    to: '/tesis',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Proyectos de residencia',
    to: '/residencias',
    icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Ayuda',
  },
  {
    component: CNavItem,
    name: 'Solicitud de libros',
    to: '/solicitudes',
    icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Contactanos',
    to: '/contacto',
    icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
  },
]

export default _userNav
