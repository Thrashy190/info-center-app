import React from 'react'
import { CRow, CCol, CContainer } from '@coreui/react'
import BookSearcher from '../../../components/buscadores/BookSearcher'
import Pagination from '../../../components/pagination/Pagination'
import BooksCards from '../../../components/user/cards/BooksCards'

const arr = [
  { nombre: 'Titulo 1', autor: 'nombre', id: 1 },
  { nombre: 'Titulo 2', autor: 'nombre', id: 2 },
  { nombre: 'Titulo 3', autor: 'nombre', id: 3 },
]

const Libros = () => {
  return (
    <>
      <CContainer>
        {/* este es para el filtro*/}
        <CRow>
          <CCol xs={4}>
            <BookSearcher />
          </CCol>
          <CCol>
            {/* este es para cada tarjeta*/}
            {arr.map((data) => {
              return (
                <CRow key={data.id}>
                  <CCol>
                    <BooksCards data={data} />
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

export default Libros
