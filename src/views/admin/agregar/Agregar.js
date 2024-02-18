import React, { useState } from 'react'

import { CButtonGroup, CButton } from '@coreui/react'
import AddBooksCard from '../../../components/admin/cards/addCards/AddBooksCard'
import AddTesisCard from '../../../components/admin/cards/addCards/AddTesisCard'
import AddProjectsCard from '../../../components/admin/cards/addCards/AddProjectsCard'
import AddOthersCard from '../../../components/admin/cards/addCards/AddOthersCard'

const Agregar = () => {
  const [options, setOptions] = useState(0)

  return (
    <div>
      <div>
        <CButtonGroup role="group" aria-label="Basic outlined example">
          <CButton
            color="primary"
            variant="outline"
            onClick={() => {
              setOptions(0)
            }}
          >
            Libros
          </CButton>
          <CButton
            color="primary"
            variant="outline"
            onClick={() => {
              setOptions(1)
            }}
          >
            Tesis
          </CButton>
          <CButton
            color="primary"
            variant="outline"
            onClick={() => {
              setOptions(2)
            }}
          >
            Proyectos de residencia
          </CButton>
          <CButton
            color="primary"
            variant="outline"
            onClick={() => {
              setOptions(3)
            }}
          >
            Otro
          </CButton>
        </CButtonGroup>
      </div>
      <div className="pt-4">
        {options === 0 ? (
          <AddBooksCard />
        ) : options === 1 ? (
          <AddTesisCard />
        ) : options === 2 ? (
          <AddProjectsCard />
        ) : (
          <AddOthersCard />
        )}
      </div>
    </div>
  )
}

export default Agregar
