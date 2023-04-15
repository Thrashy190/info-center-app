import React from 'react'
import { CRow, CCol, CContainer } from '@coreui/react'
import ProjectsSearcher from '../../../components/shared/buscadores/ProjectsSearcher'
import Pagination from '../../../components/shared/pagination/Pagination'
import ProjectsCardsAdmin from '../../../components/admin/cards/ProjectsCardsAdmin'

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
          <CCol xs={12} lg={5} xl={4} xxl={3}>
            <ProjectsSearcher />
          </CCol>
          <CCol xs={12} lg={7} xl={8} xxl={9}>
            {/* este es para cada tarjeta*/}
            {arr.map((data) => {
              return (
                <CRow key={data.id}>
                  <CCol>
                    <ProjectsCardsAdmin data={data} />
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
