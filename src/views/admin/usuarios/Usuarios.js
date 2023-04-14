import React from 'react'
import { CContainer } from '@coreui/react'
import RegisterUserCard from '../../../components/admin/cards/RegisterUserCard'
import UserListCard from '../../../components/admin/cards/UserListCard'

const Usuarios = () => {
  return (
    <CContainer>
      <RegisterUserCard />
      <UserListCard />
    </CContainer>
  )
}

export default Usuarios
