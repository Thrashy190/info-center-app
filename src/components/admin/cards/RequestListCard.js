import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableRow,
} from '@coreui/react'
import RequestsModalAdmin from '../modals/RequestsModalAdmin'

const RequestListCard = ({ bookRequests, setBookRequests }) => {
  const [requestData, setRequestData] = useState()
  const [showModal, setShowModal] = useState(false)
  const reviewRequest = (id) => {
    const request = bookRequests.find((request) => request.id === id)
    setRequestData({ ...request, reviewed: true })
  }

  return (
    <CCard className="mt-4">
      <CCardHeader>
        <CCardTitle className="pt-2">Solicitudes para agregar o buscar libro</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CTable responsive striped>
          <CTableHead>
            <CTableRow>
              <CTableDataCell>ID</CTableDataCell>
              <CTableDataCell>Fecha</CTableDataCell>
              <CTableDataCell>Descripción</CTableDataCell>
              <CTableDataCell>Revisado</CTableDataCell>
              <CTableDataCell>Acciones</CTableDataCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {bookRequests.map((bookRequest) => (
              <CTableRow key={bookRequest.id}>
                <CTableDataCell>{bookRequest.id}</CTableDataCell>
                <CTableDataCell>{bookRequest.date}</CTableDataCell>
                <CTableDataCell>{`${bookRequest.description.substring(0, 50)}...`}</CTableDataCell>
                <CTableDataCell>{bookRequest.reviewed ? 'Sí' : 'No'}</CTableDataCell>
                <CTableDataCell>
                  <CButton
                    color="primary"
                    onClick={() => {
                      setShowModal(true)
                    }}
                  >
                    Revisar
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
      <RequestsModalAdmin
        showModal={showModal}
        setShowModal={setShowModal}
        reviewRequest={reviewRequest}
      />
    </CCard>
  )
}

export default RequestListCard
