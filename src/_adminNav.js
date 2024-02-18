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
  cilAccountLogout,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _adminNav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard-admin',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Informacion',
  },
  {
    component: CNavItem,
    name: 'Libros',
    to: '/dashboard-admin/libros-admin',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Tesis',
    to: '/dashboard-admin/tesis-admin',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Proyectos de residencia',
    to: '/dashboard-admin/residencias-admin',
    icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Agregar contenido',
    to: '/dashboard-admin/agregar-contenido',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavItem,
    name: 'Usuarios',
    to: '/dashboard-admin/usuarios',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Solicitud de libros',
    to: '/dashboard-admin/solicitudes-admin',
    icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Cerrar sesión',
    to: '/login',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  },
]

export default _adminNav
