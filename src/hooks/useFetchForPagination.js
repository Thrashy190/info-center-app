import { useState, useEffect } from 'react'

const useFetchForPagination = (url) => {
  const [search, setSearch] = useState({ search: '', year: '', available: 1 })
  const [page, setPage] = useState(1)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}${url}/${page}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Origin: 'http://localhost:3000',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [page, search.search, search.year, search.available])

  return [isLoading, data, setPage, page, search, setSearch]
}

export default useFetchForPagination
