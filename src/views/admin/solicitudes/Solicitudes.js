import React, { useState } from 'react'
import RequestListCard from '../../../components/admin/cards/RequestListCard'
import { CCol, CContainer, CForm, CFormInput, CFormSelect, CRow, CSpinner } from '@coreui/react'
import Pagination from 'src/components/shared/pagination/Pagination'
import { useFetchForPagination } from 'src/hooks'

const Solicitudes = () => {
  const [isLoading, data, setPage, page] = useFetchForPagination('/protected/requests/request')

  if (isLoading) {
    return <CSpinner color="primary" />
  }

  return (
    <CContainer>
      <CRow>
        <CCol>
          <CFormSelect
            aria-label="Default select example"
            options={[
              'Ordenar por',
              { label: 'Fecha', value: '1' },
              { label: 'Estado', value: '2' },
              { label: 'ID', value: '3' },
            ]}
          />
        </CCol>
        <CCol>
          <CForm>
            <CFormInput type="text" id="requestSearch" placeholder="Buscador" />
          </CForm>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <RequestListCard data={data} />
        </CCol>
      </CRow>
      <Pagination page={page} setPage={setPage} data={data} />
    </CContainer>
  )
}

export default Solicitudes
