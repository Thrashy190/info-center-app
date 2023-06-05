import { CButton, CButtonGroup, CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { CChartBar } from '@coreui/react-chartjs'
import React from 'react'

const TotalAttendanceCareerSemester = () => {
  return (
    <CCard>
      <CCardBody>
        <CRow className="pb-4">
          <CCol sm={5}>
            <h5 id="traffic" className="card-title mb-0">
              Ingreso de alumnos por carrera y semestre
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
          style={{ height: '350px' }}
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
                label: '1° Semestre',
                backgroundColor: '#97BBFFFF',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              },
              {
                label: '2° Semestre',
                backgroundColor: '#F9A826FF',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              },
              {
                label: '3° Semestre',
                backgroundColor: '#F48FB1FF',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              },
              {
                label: '4° Semestre',
                backgroundColor: '#F06292FF',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              },
              {
                label: '5° Semestre',
                backgroundColor: '#EC407AFF',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              },
              {
                label: '6° Semestre',
                backgroundColor: '#E91E63FF',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              },
              {
                label: '7° Semestre',
                backgroundColor: '#D81B60FF',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              },
              {
                label: '8° Semestre',
                backgroundColor: '#C2185BFF',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              },
              {
                label: '9° Semestre',
                backgroundColor: '#AD1457FF',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              },
              {
                label: '10° Semestre',
                backgroundColor: '#880E4FFF',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              },
              {
                label: '11° Semestre',
                backgroundColor: '#7A1FA2FF',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              },
            ],
          }}
          labels="months"
          options={{
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 2,
              },
            },
            plugins: {
              legend: {
                position: 'right',
              },
              title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart',
              },
            },
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

export default TotalAttendanceCareerSemester
