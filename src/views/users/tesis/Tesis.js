import React from 'react'
import { CRow, CCol, CContainer } from '@coreui/react'
import TesisSearcher from '../../../components/shared/buscadores/TesisSearcher'
import Pagination from '../../../components/shared/pagination/Pagination'
import TesisCards from '../../../components/user/cards/TesisCards'

const arr = [
  { nombre: 'Titulo 1', especialidad: 'Sistemas', id: 1, code: 142563 },
  { nombre: 'Titulo 2', especialidad: 'Informatica', id: 2, code: 896523 },
  { nombre: 'Titulo 3', especialidad: 'Gestion', id: 3, code: 874512 },
]

const Tesis = () => {
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
                    <TesisCards data={data} />
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
