import React from 'react'
import { CRow, CCol, CContainer } from '@coreui/react'

import ProjectsSearcher from '../../../components/buscadores/ProjectsSearcher'
import Pagination from '../../../components/pagination/Pagination'
import ProjectsCards from '../../../components/user/cards/ProjectsCards'

const arr = [
  { nombre: 'Titulo 1', especialidad: 'Sistemas', id: 1 },
  { nombre: 'Titulo 2', especialidad: 'Informatica', id: 2 },
  { nombre: 'Titulo 3', especialidad: 'Gestion', id: 3 },
]

const Residencia = () => {
  return (
    <>
      <CContainer>
        {/* este es para el filtro*/}
        <CRow>
          <CCol xs={4}>
            <ProjectsSearcher />
          </CCol>
          <CCol>
            {/* este es para cada tarjeta*/}
            {arr.map((data) => {
              return (
                <CRow key={data.id}>
                  <CCol>
                    <ProjectsCards data={data} />
                  </CCol>
                </CRow>
              )
            })}
          </CCol>
        </CRow>
      </CContainer>
      {/* aqui esta la pagincación */}
      <Pagination />
    </>
  )
}

export default Residencia
