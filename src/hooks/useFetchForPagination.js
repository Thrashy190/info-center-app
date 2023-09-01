import { useState, useEffect } from 'react'

const useFetchForPagination = (url, page) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(url, {
      method: 'GET', // Use the appropriate HTTP method
      headers: {
        Origin: 'http://localhost:3000', // The origin of your frontend
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setIsLoading(false)
        console.log(data.data)
      })
      .catch((err) => console.log(err))
  }, [page])

  return [isLoading, data]
}

export default useFetchForPagination
