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
        <span className="me-1">Powered by students of</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          Centro de informacion ITS
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
