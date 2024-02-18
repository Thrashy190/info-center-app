import { CButton, CButtonGroup, CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { CChartBar } from '@coreui/react-chartjs'
import React from 'react'

const TotalAttendanceChart = () => {
  return (
    <CCard>
      <CCardBody>
        <CRow className="pb-4">
          <CCol sm={5}>
            <h5 id="traffic" className="card-title mb-0">
              Ingreso a la plataforma de totales
            </h5>
            <div className="small text-medium-emphasis">Enero - Diciembre 2023</div>
          </CCol>
          <CCol sm={7} className="d-none d-md-block">
            <CButtonGroup className="float-end me-3">
              {['Semanal', 'Mensual'].map((value) => (
                <CButton color="outline-secondary" key={value} className="mx-0">
                  {value}
                </CButton>
              ))}
            </CButtonGroup>
          </CCol>
        </CRow>
        <CChartBar
          style={{ height: '250px' }}
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Hombres Empleados',
                backgroundColor: '#522fc9',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                stack: 'Stack 0',
              },
              {
                label: 'Hombres Alumnos',
                backgroundColor: '#97BBFFFF',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                stack: 'Stack 0',
              },
              {
                label: 'Mujeres Empleados',
                backgroundColor: '#ad1983',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                stack: 'Stack 1',
              },
              {
                label: 'Mujeres Alumnos',
                backgroundColor: 'rgba(248,121,121,0.5)',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                stack: 'Stack 1',
              },
              {
                label: 'Prefiero no decirlo Empleados',
                backgroundColor: '#19ad63',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                stack: 'Stack 2',
              },
              {
                label: 'Prefiero no decirlo Alumnos',
                backgroundColor: 'rgb(121,232,152)',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                stack: 'Stack 2',
              },
            ],
          }}
          labels="months"
          options={{
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
          }}
        />
      </CCardBody>
    </CCard>
  )
}

export default TotalAttendanceChart
