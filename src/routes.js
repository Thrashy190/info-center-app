import React from 'react'

//Rutas login

//Rutas usuarios

const Inicio = React.lazy(() => import('./views/users/inicio/Inicio'))
const Libros = React.lazy(() => import('./views/users/libros/Libros'))
const Tesis = React.lazy(() => import('./views/users/tesis/Tesis'))
const Residencias = React.lazy(() => import('./views/users/residencia/Residencia'))
const Solicitudes = React.lazy(() => import('./views/users//solicitudes/Solicitudes'))
const Contacto = React.lazy(() => import('./views/users/contacto/Contacto'))

//Rutas admin

const Dashboard = React.lazy(() => import('./views/admin/dashboard/Dashboard'))
const LibrosAdmin = React.lazy(() => import('./views/admin/libros/Libros'))
const TesisAdmin = React.lazy(() => import('./views/admin/tesis/Tesis'))
const ResidenciasAdmin = React.lazy(() => import('./views/admin/residencia/Residencia'))
const Agregar = React.lazy(() => import('./views/admin/agregar/Agregar'))
const Estadisticas = React.lazy(() => import('./views/admin/estadisticas/Estadisticas'))
const Usuarios = React.lazy(() => import('./views/admin/usuarios/Usuarios'))
const SolicitudesAdmin = React.lazy(() => import('./views/admin/solicitudes/Solicitudes'))

const routes = [
  //Ruta default
  { path: '/', exact: true, name: 'Home' },

  //Rutas admin
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/libros-admin', name: 'Libros', element: LibrosAdmin },
  { path: '/tesis-admin', name: 'Tesis', element: TesisAdmin },
  { path: '/residencias-admin', name: 'Residencias', element: ResidenciasAdmin },
  { path: '/agregar-contenido', name: 'Agregar', element: Agregar },
  { path: '/estadisticas', name: 'Estadisticas', element: Estadisticas },
  { path: '/usuarios', name: 'Usuarios', element: Usuarios },
  { path: '/solicitudes-admin', name: 'Solicitudes', element: SolicitudesAdmin },

  //Rutas usuarios

  { path: '/inicio', name: 'Dashboard', element: Inicio },
  { path: '/libros', name: 'Libros', element: Libros },
  { path: '/tesis', name: 'Tesis', element: Tesis },
  { path: '/residencias', name: 'Residencias', element: Residencias },
  { path: '/contacto', name: 'Contacto', element: Contacto },
  { path: '/solicitudes', name: 'Solicitudes', element: Solicitudes },
]

export default routes
