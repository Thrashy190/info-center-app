import { useEffect, useState } from 'react'

export const getCareers = () => {
  return fetch(`${import.meta.env.REACT_APP_BACKEND_HOST}/public/careers`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err))
}
