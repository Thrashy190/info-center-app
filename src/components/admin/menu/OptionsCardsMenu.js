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
import PropTypes from 'prop-types'

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

OptionsCardsMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  visibleDelete: PropTypes.bool.isRequired,
  setVisibleDelete: PropTypes.func.isRequired,
}

export default OptionsCardsMenu
