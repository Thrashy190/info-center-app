import { useState, useEffect } from 'react'

const useFetchForPagination = (url) => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${url}/${page}`, {
      method: 'GET', // Use the appropriate HTTP method
      headers: {
        Origin: 'http://localhost:3000', // The origin of your frontend
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [page])

  return [isLoading, data, setPage, page]
}

export default useFetchForPagination
