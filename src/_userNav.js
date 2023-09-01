import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilHome,
  cilPhone,
  cilFolderOpen,
  cilBook,
  cilBookmark,
  cilAccountLogout,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _userNav = [
  {
    component: CNavItem,
    name: 'Inicio',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Contenido',
  },
  {
    component: CNavItem,
    name: 'Libros',
    to: '/dashboard/libros',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Tesis',
    to: '/dashboard/tesis',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Proyectos de residencia',
    to: '/dashboard/residencias',
    icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Ayuda',
  },
  {
    component: CNavItem,
    name: 'Solicitud de libros',
    to: '/dashboard/solicitudes',
    icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Contactanos',
    to: '/dashboard/contacto',
    icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Cerrar sesión',
    to: '/home',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  },
]

export default _userNav
