import React, { useState } from 'react'
import RequestListCard from '../../../components/admin/cards/RequestListCard'

const Solicitudes = () => {
  const [bookRequests, setBookRequests] = useState([
    {
      id: 1,
      date: '10/04/2023',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut neque in leo laoreet luctus.',
      reviewed: false,
    },
    {
      id: 2,
      date: '12/04/2023',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      reviewed: true,
    },
    {
      id: 3,
      date: '14/04/2023',
      description: 'Etiam vel arcu et neque venenatis tincidunt. Vestibulum sed bibendum risus.',
      reviewed: false,
    },
  ])

  return (
    <>
      <RequestListCard bookRequests={bookRequests} setBookRequests={setBookRequests} />
    </>
  )
}

export default Solicitudes
