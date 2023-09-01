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
    console.log(JSON.stringify(user))
    fetch(`http://localhost:8080/public/auth/login`, {
      method: 'POST', // Use the appropriate HTTP method
      headers: {
        Origin: 'http://localhost:3000', // The origin of your frontend
      },
      body: {
        email: 'diego456.dlm77@gmail.com',
        password: '123123',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCurrentUser(data)
        setNotify({
          isOpen: true,
          message: 'Inicio de sesion exitosa',
          type: 'success',
        })
        //navigate("/dashboard-admin");
      })
      .catch((err) => {
        setNotify({
          isOpen: true,
          message: err,
          type: 'danger',
        })
      })
  }

  const values = {
    currentUser,
    login,
    logOut,
  }

  return (
    <Fragment>
      <UserContext.Provider value={values}>{children}</UserContext.Provider>
      <Notification notify={notify} setNotify={setNotify} position={'top'} />
    </Fragment>
  )
}

export default AuthProvider
