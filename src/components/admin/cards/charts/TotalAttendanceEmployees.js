import { CButton, CButtonGroup, CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import React from 'react'

const TotalAttendanceEmployees = () => {
  return (
    <CCard className="mb-4">
      <CCardBody>
        <CRow className="pb-4">
          <CCol sm={5}>
            <h5 id="traffic" className="card-title mb-0">
              Ingreso de Empleados
            </h5>
            <div className="small text-medium-emphasis">Enero - Diciembre 2023</div>
          </CCol>
          <CCol sm={7} className="d-none d-md-block">
            <CButtonGroup className="float-end me-3">
              {['Semanal', 'Mensual', 'Anual'].map((value) => (
                <CButton color="outline-secondary" key={value} className="mx-0">
                  {value}
                </CButton>
              ))}
            </CButtonGroup>
          </CCol>
        </CRow>
        <CChart
          type="radar"
          data={{
            labels: [
              'Sistemas',
              'Industrial',
              'Mecatronica',
              'Mecanica',
              'Gestion',
              'Materiales',
              'Electrica',
              'Electronica',
            ],
            datasets: [
              {
                label: 'Hombres',
                backgroundColor: 'rgba(151, 187, 255, 0.2)',
                borderColor: 'rgba(151, 187, 255, 1)',
                pointBackgroundColor: 'rgba(151, 187, 255, 1)',
                pointBorderColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(151, 187, 255, 1)',
                data: [28, 48, 40, 19, 96, 27, 100, 50],
              },
              {
                label: 'Mujeres',
                backgroundColor: 'rgba(200, 0, 0, 0.2)',
                borderColor: 'rgba(200, 0, 0, 1)',
                pointBackgroundColor: 'rgba(200, 0, 0, 1)',
                pointBorderColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(200, 0, 0, 1)',
                data: [65, 59, 90, 81, 56, 55, 100, 80],
              },
              {
                label: 'Prefiero no decirlo',
                backgroundColor: 'rgba(10,231,23,0.2)',
                borderColor: '#79e898',
                pointBackgroundColor: '#79e898',
                pointBorderColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: '#79e898',
                data: [90, 81, 56, 55, 50, 80, 30, 30],
              },
            ],
          }}
        />
      </CCardBody>
    </CCard>
  )
}

export default TotalAttendanceEmployees
