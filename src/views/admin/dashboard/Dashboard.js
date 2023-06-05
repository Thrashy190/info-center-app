import React from 'react'

import { CCol, CRow } from '@coreui/react'

import TotalAttendanceChart from '../../../components/admin/cards/charts/TotalAttendanceChart'
import TotalAttendanceStudents from '../../../components/admin/cards/charts/TotalAttendanceStudents'
import TotalAttendanceEmployees from '../../../components/admin/cards/charts/TotalAttendanceEmployees'
import TotalAttendanceCareerSemester from '../../../components/admin/cards/charts/TotalAttendanceCareerSemester'

const Dashboard = () => {
  return (
    <>
      <CRow className="pb-4">
        <CCol>
          <TotalAttendanceChart />
        </CCol>
      </CRow>
      <CRow className="pb-4">
        <CCol>
          <TotalAttendanceCareerSemester />
        </CCol>
      </CRow>
      <CRow>
        <CCol sm={6}>
          <TotalAttendanceStudents />
        </CCol>
        <CCol sm={6}>
          <TotalAttendanceEmployees />
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
