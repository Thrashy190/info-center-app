import React from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader } from '@coreui/react'

const RequestsModalAdmin = ({ showModal, setShowModal, reviewRequest }) => {
  return (
    <CModal
      alignment="center"
      visible={showModal}
      onClose={() => {
        setShowModal(false)
      }}
    >
      <CModalHeader
        onClose={() => {
          setShowModal(false)
        }}
        closeButton
      >
        Revisión de solicitud
      </CModalHeader>
      <CModalBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut neque in leo laoreet luctus.
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          onClick={() => {
            setShowModal(false)
          }}
        >
          Cerrar
        </CButton>
        <CButton color="primary">Marcar como revisado</CButton>
      </CModalFooter>
    </CModal>
  )
}

export default RequestsModalAdmin
