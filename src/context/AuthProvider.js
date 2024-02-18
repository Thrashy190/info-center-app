import React, { Fragment, createContext, useState, useContext } from 'react'
import Notification from '../components/shared/notifications/Notifications'
import { useNavigate } from 'react-router-dom'

const UserContext = createContext()

export const useAuth = () => useContext(UserContext)

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null)
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  })

  const logOut = () => {
    setCurrentUser(null)
    navigate('/')
  }

  const login = async (user) => {
    let response

    try {
      response = await fetch(`${process.env.REACT_APP_BASE_URL}/public/auth/login`, {
        method: 'POST',
        headers: {
          Origin: 'http://localhost:3000',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
    } catch (error) {
      setNotify({
        isOpen: true,
        message: error,
        type: 'danger',
      })
    }

    if (response?.ok) {
      setCurrentUser(response.json())
      localStorage.setItem('token', JSON.stringify(response.json()))
      setNotify({
        isOpen: true,
        message: 'Inicio de sesion exitosa',
        type: 'success',
      })
      navigate('/dashboard-admin')
    } else {
      setNotify({
        isOpen: true,
        message: 'Error al iniciar sesion, verifique sus credenciales',
        type: 'danger',
      })
    }
  }

  const access = async (data, type) => {
    let response

    try {
      // http://localhost:8080/public/access/estudiantes
      response = await fetch(`${process.env.REACT_APP_BASE_URL}/public/access/${type}`, {
        method: 'POST',
        headers: {
          Origin: 'http://localhost:3000',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    } catch (error) {
      setNotify({
        isOpen: true,
        message: error,
        type: 'danger',
      })
    }

    if (response?.ok) {
      setCurrentUser(response.json())
      setNotify({
        isOpen: true,
        message: 'Bienvenido a la plataforma',
        type: 'success',
      })
      navigate('/dashboard')
    } else {
      setNotify({
        isOpen: true,
        message: 'Error al entrar en la plataforma',
        type: 'danger',
      })
    }
  }

  const values = {
    currentUser,
    login,
    logOut,
    access,
  }

  return (
    <Fragment>
      <UserContext.Provider value={values}>{children}</UserContext.Provider>
      <Notification notify={notify} setNotify={setNotify} position={'top'} />
    </Fragment>
  )
}

export default AuthProvider
