import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const AdminLayout = React.lazy(() => import('./layout/AdminLayout'))

// Pages
const AdminLogin = React.lazy(() => import('./views/pages/AdminLogin/AdminLogin'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))

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

const App = () => {
  return (
    <div>
      <Suspense fallback={loading}>
        <Routes>
          <Route index element={<Login />} />
          <Route path="home" element={<Login />} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="dashboard" element={<DefaultLayout />}>
            <Route path="" element={<Inicio />} />
            <Route path="libros" element={<Libros />} />
            <Route path="tesis" element={<Tesis />} />
            <Route path="residencias" element={<Residencias />} />
            <Route path="solicitudes" element={<Solicitudes />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
          <Route path="dashboard-admin" element={<AdminLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="libros-admin" element={<LibrosAdmin />} />
            <Route path="tesis-admin" element={<TesisAdmin />} />
            <Route path="residencias-admin" element={<ResidenciasAdmin />} />
            <Route path="agregar-contenido" element={<Agregar />} />
            <Route path="estadisticas" element={<Estadisticas />} />
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="solicitudes-admin" element={<SolicitudesAdmin />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
