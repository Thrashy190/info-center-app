import React, { useState } from 'react'
import { CRow, CCol, CContainer, CSpinner } from '@coreui/react'
import ProjectsSearcher from '../../../components/shared/buscadores/ProjectsSearcher'
import Pagination from '../../../components/shared/pagination/Pagination'
import ProjectsCards from '../../../components/user/cards/ProjectsCards'

import { useFetchForPagination } from 'src/hooks'

const Residencia = () => {
  const [isLoading, data, setPage, page] = useFetchForPagination(`/public/projects`)

  return (
    <>
      {isLoading ? (
        <CSpinner color="primary" />
      ) : (
        <>
          <CContainer>
            <CRow>
              <CCol xs={12} lg={5} xl={4} xxl={3}>
                <ProjectsSearcher />
              </CCol>
              <CCol xs={12} lg={7} xl={8} xxl={9}>
                {data.projects.map((project) => {
                  return (
                    <CRow key={project.id}>
                      <CCol>
                        <ProjectsCards data={project} />
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

export default Residencia
