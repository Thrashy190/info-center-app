import React, { useState } from 'react'
import { CRow, CCol, CContainer, CSpinner } from '@coreui/react'
import BookSearcher from '../../../components/shared/buscadores/BookSearcher'
import Pagination from '../../../components/shared/pagination/Pagination'
import BooksCards from '../../../components/user/cards/BooksCards'

import { useFetchForPagination } from 'src/hooks'

const Libros = () => {
  const [isLoading, data, setPage, page] = useFetchForPagination(
    'http://localhost:8080/public/books',
  )

  return (
    <>
      {isLoading ? (
        <CSpinner color="primary" />
      ) : (
        <>
          <CContainer>
            <CRow>
              <CCol xs={12} lg={5} xl={4} xxl={3}>
                <BookSearcher />
              </CCol>
              <CCol xs={12} lg={7} xl={8} xxl={9}>
                {data.books.map((book) => {
                  return (
                    <CRow key={book.id}>
                      <CCol>
                        <BooksCards data={book} />
                      </CCol>
                    </CRow>
                  )
                })}
              </CCol>
            </CRow>
          </CContainer>
          {/* aqui esta la pagincación */}
          <Pagination page={page} setPage={setPage} data={data} />
        </>
      )}
    </>
  )
}

export default Libros
