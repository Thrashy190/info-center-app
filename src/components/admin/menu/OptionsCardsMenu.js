import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

const OptionsCardsMenu = ({ visible, setVisible, visibleDelete, setVisibleDelete }) => {
  return (
    <div>
      <CDropdown variant="btn-group">
        <CDropdownToggle color={'secondary'}>
          <CIcon icon={cilOptions} />
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem onClick={() => setVisibleDelete(!visibleDelete)}>Eliminar</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem onClick={() => setVisible(!visible)}>Modificar</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  )
}

export default OptionsCardsMenu
