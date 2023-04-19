import React from 'react'
import { CRow, CCol, CContainer } from '@coreui/react'
import TesisSearcher from '../../../components/buscadores/TesisSearcher'
import Pagination from '../../../components/pagination/Pagination'
import TesisCardsAdmin from '../../../components/admin/cards/TesisCardsAdmin'

const Tesis = () => {
  const arr = [
    { nombre: 'Titulo 1', Especialidad: 'sistemas', Ejemplar: '3545', id: 1 },
    { nombre: 'Titulo 2', Especialidad: 'sistemas', Ejemplar: '3545', id: 2 },
    { nombre: 'Titulo 3', Especialidad: 'sistemas', Ejemplar: '3545', id: 3 },
  ]

  return (
    <>
      <CContainer>
        {/* este es para el filtro*/}
        <CRow>
          <CCol xs={12} lg={5} xl={4} xxl={3}>
            <TesisSearcher />
          </CCol>
          <CCol xs={12} lg={7} xl={8} xxl={9}>
            {/* este es para cada tarjeta*/}
            {arr.map((data) => {
              return (
                <CRow key={data.id}>
                  <CCol>
                    <TesisCardsAdmin data={data} />
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

export default Tesis
