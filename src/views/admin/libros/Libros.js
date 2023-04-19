import React from 'react'
import { CRow, CCol, CContainer } from '@coreui/react'

import BookSearcher from '../../../components/buscadores/BookSearcher'
import BooksCardsAdmin from '../../../components/admin/cards/BooksCardsAdmin'
import Pagination from '../../../components/pagination/Pagination'

const Libros = () => {
  const arr = [
    { nombre: 'Titulo 1', autor: 'nombre', id: 1 },
    { nombre: 'Titulo 2', autor: 'nombre', id: 2 },
    { nombre: 'Titulo 3', autor: 'nombre', id: 3 },
  ]

  return (
    <>
      <CContainer>
        <CRow>
          <CCol xs={12} lg={5} xl={4} xxl={3}>
            <BookSearcher />
          </CCol>
          <CCol xs={12} lg={7} xl={8} xxl={9}>
            {arr.map((data) => {
              return (
                <CRow key={data.id}>
                  <CCol>
                    <BooksCardsAdmin data={data} />
                  </CCol>
                </CRow>
              )
            })}
          </CCol>
        </CRow>
      </CContainer>
      <Pagination />
    </>
  )
}

export default Libros
