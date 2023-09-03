import React from 'react'
import { CRow, CCol, CContainer, CSpinner } from '@coreui/react'
import TesisSearcher from '../../../components/shared/buscadores/TesisSearcher'
import Pagination from '../../../components/shared/pagination/Pagination'
import TesisCards from '../../../components/user/cards/TesisCards'
import { useFetchForPagination } from 'src/hooks'

const Tesis = () => {
  const [isLoading, data, setPage, page] = useFetchForPagination(
    `http://localhost:8080/public/tesis`,
  )

  return (
    <>
      {isLoading ? (
        <CSpinner color="primary" />
      ) : (
        <>
          <CContainer>
            {/* este es para el filtro*/}
            <CRow>
              <CCol xs={12} lg={5} xl={4} xxl={3}>
                <TesisSearcher />
              </CCol>
              <CCol xs={12} lg={7} xl={8} xxl={9}>
                {data.tesis.length > 0 ? (
                  data.tesis.map((data) => {
                    return (
                      <CRow key={data.id}>
                        <CCol>
                          <TesisCards data={data} />
                        </CCol>
                      </CRow>
                    )
                  })
                ) : (
                  <CRow>
                    <CCol style={{ height: '12rem' }} className=" my-2">
                      <div>Ningun Resultado encontrado</div>
                    </CCol>
                  </CRow>
                )}
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

export default Tesis
