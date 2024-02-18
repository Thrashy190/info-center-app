import React from 'react'
import { CToast, CToaster, CAlert, CToastBody, CToastHeader } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle, cilWarning } from '@coreui/icons'

const Notification = ({ notify, setNotify }) => {
  const handleClose = () => {
    setNotify({
      ...notify,
      isOpen: false,
    })
  }

  return (
    <CToaster placement="top-end">
      <CToast visible={notify.isOpen} autohide={true} onClose={handleClose}>
        <CToastHeader>
          <div className="fw-bold me-auto">Notificacíon</div>
        </CToastHeader>
        <CToastBody>
          <CAlert color={notify.type} className="d-flex align-items-center">
            <CIcon
              icon={notify.type === 'success' ? cilCheckCircle : cilWarning}
              className="flex-shrink-0 me-2"
              width={24}
              height={24}
            />
            <div>{notify.message}</div>
          </CAlert>
        </CToastBody>
      </CToast>
    </CToaster>
  )
}

export default Notification
