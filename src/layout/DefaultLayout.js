import React from 'react'
import { AppSidebar, AppFooter, AppHeader } from '../components/general'
import { Outlet, useNavigate } from 'react-router-dom'
import { CContainer } from '@coreui/react'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <Outlet />
          </CContainer>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
