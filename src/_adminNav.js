import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilSpeedometer,
  cilFolderOpen,
  cilBook,
  cilUserFollow,
  cilChart,
  cilPlus,
  cilBookmark,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _adminNav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Informacion',
  },
  {
    component: CNavItem,
    name: 'Libros',
    to: '/libros-admin',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Tesis',
    to: '/tesis-admin',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Proyectos de residencia',
    to: '/residencias-admin',
    icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Agregar contenido',
    to: '/agregar-contenido',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavItem,
    name: 'Usuarios',
    to: '/usuarios',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Solicitud de libros',
    to: '/solicitudes-admin',
    icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
  },
]

export default _adminNav
