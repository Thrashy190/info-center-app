import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://saltillo.tecnm.mx/" target="_blank" rel="noopener noreferrer">
          Tecnologico Nacional campus Saltillo
        </a>
        <span className="ms-1">&copy; 2023 TecNM </span>
      </div>
      <div className="ms-auto">
        <a href="https://saltillo.tecnm.mx/" target="_blank" rel="noopener noreferrer">
          Centro de informacion ITS
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
