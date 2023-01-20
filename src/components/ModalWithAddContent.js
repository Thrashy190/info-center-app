/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { CModal, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'

const ModalWithAddContent = ({ children, text }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CCol>
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            border: '2px solid',
            width: '100%',
            height: '18rem',
            borderStyle: 'dashed',
            cursor: 'pointer',
          }}
          onClick={() => setVisible(!visible)}
        >
          <div
            className="d-flex justify-content-center align-items-center mb-1"
            style={{
              border: '5px solid',
              borderRadius: '50%',
              width: '7rem',
              height: '7rem',
            }}
          >
            <CIcon icon={cilPlus} size={'6xl'} />
          </div>
          <h5 className="text-medium-emphasis pb-2">Agregar libro</h5>
        </div>
      </CCol>
      <CModal size="xl" alignment="center" visible={visible} onClose={() => setVisible(false)}>
        {children}
      </CModal>
    </>
  )
}

export default ModalWithAddContent
