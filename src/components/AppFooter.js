import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://saltillo.tecnm.mx/" target="_blank" rel="noopener noreferrer">
          Tecnologico nacional campus Saltillo
        </a>
        <span className="ms-1">&copy; 2023 TecNM </span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Centro de informacion ITS</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
