import React, { useState } from 'react'
import {
  CButton,
  CFormCheck,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'

const DeleteModalsAdmin = ({ type, id, visibleDelete, setVisibleDelete }) => {
  const [active, setActive] = useState(false)
  return (
    <CModal alignment="center" visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
      <CModalHeader onClose={() => setVisibleDelete(false)}>
        <CModalTitle alignment="center">Eliminar {type}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>¿Estas seguro de eliminar este {type}?</p>
        <CFormCheck
          className=" my-3"
          id="flexCheckDefault"
          label="Estoy seguro"
          onClick={() => {
            setActive(!active)
          }}
        />
      </CModalBody>
      <CModalFooter>
        {/* Botones del modal */}
        <CButton className="d-flex justify-content-center" onClick={() => setVisibleDelete(false)}>
          Cancelar
        </CButton>
        <CButton color="primary" disabled={!active}>
          Eliminar
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default DeleteModalsAdmin
