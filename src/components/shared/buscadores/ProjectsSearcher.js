import React from 'react'
import { CCard, CCardBody, CFormCheck, CFormInput, CFormSelect } from '@coreui/react'

import { rangeYear } from '../../../helpers/date'

const ProjectsSearcher = () => {
  return (
    <CCard style={{ height: '14rem' }}>
      <CCardBody>
        <CFormInput placeholder="Buscador" />
        {/* Aqui esta la barrita buscadora de fechas*/}
        <CFormSelect aria-label="Default select example" className=" my-3">
          {rangeYear().map((year) => {
            return (
              <option value={year} key={year}>
                {year}
              </option>
            )
          })}
        </CFormSelect>
        {/* Aqui esta la barrita buscadora de especialidad*/}
        <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
          <option>Especialidad</option>
          <option value="1">Informatica</option>
          <option value="2">Administración</option>
          <option value="3">Electrica</option>
          <option value="4">Electronica</option>
          <option value="5">Mecanica</option>
          <option value="6">Materiales</option>
          <option value="7">Sistemas computacionales</option>
          <option value="8">Mecatronica</option>
          <option value="9">Ing. gestion empresarial</option>
          <option value="10">Ingenieria industrial</option>
          <option value="11">Ing. en sistemas </option>
          <option value="13">Computacionales</option>
          <option value="14">Ingenieria mecanica</option>
          <option value="15">Ingenieria en electronica</option>
          <option value="16">Ingenieria electrica</option>
          <option value="17">Ingenieria en materiales</option>
        </CFormSelect>
        <CFormCheck className=" my-3" id="flexCheckDefault" label="Disponible" />
        {/* botton de disponibilidad */}
      </CCardBody>
    </CCard>
  )
}

export default ProjectsSearcher
