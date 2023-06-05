import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import PropTypes from 'prop-types'

const UserListCard = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John',
      lastName: 'Doe',
      middleName: 'Doe',
      email: 'diego@diego.com',
      birthYear: 2002,
      employeeId: 12312,
    },
    {
      id: 2,
      name: 'John',
      lastName: 'Doe',
      middleName: 'Doe',
      email: 'diego@diego.com',
      birthYear: 2002,
      employeeId: 12312,
    },
  ])

  //useEffect(() => {
  //fetchUsers()
  //}, [])

  //const fetchUsers = async () => {
  //try {
  //const response = await axios.get('https://myapi.com/users')
  //setUsers(response.data)
  //} catch (error) {
  //console.error(error)
  //}
  //}

  //const handleDelete = async (id) => {
  //try {
  //await axios.delete(`https://myapi.com/users/${id}`)
  //fetchUsers()
  //} catch (error) {
  //console.error(error)
  //}
  // }

  return (
    <CCard className="mt-4">
      <CCardHeader>
        <CCardTitle className="pt-2">Lista de Usuarios</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CTable striped responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Nombre</CTableHeaderCell>
              <CTableHeaderCell>Apellido Paterno</CTableHeaderCell>
              <CTableHeaderCell>Apellido Materno</CTableHeaderCell>
              <CTableHeaderCell>Correo</CTableHeaderCell>
              <CTableHeaderCell>Año de Nacimiento</CTableHeaderCell>
              <CTableHeaderCell>Matrícula de Empleado</CTableHeaderCell>
              <CTableHeaderCell>Acciones</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {users.map((user) => (
              <CTableRow key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.middleName}</td>
                <td>{user.email}</td>
                <td>{user.birthYear}</td>
                <td>{user.employeeId}</td>
                <td>
                  <CButton color="danger">Eliminar</CButton>
                </td>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

UserListCard.propTypes = {
  data: PropTypes.string.isRequired, // Add the missing prop type validation
}

export default UserListCard
