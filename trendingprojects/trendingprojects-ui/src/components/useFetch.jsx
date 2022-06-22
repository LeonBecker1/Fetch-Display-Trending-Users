//`localhost:8080/api/projects?language=${language}`
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = (language) => {
  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:8080/api/projects?language=${language}`)
      .then((response) => {
        setData(response.data)
        setError(null)

      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [language])

  const refetch = () => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/projects?language=${language}`)
      .then((response) => {
        setData(response.data)
        setError(null)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      });
  };

  return { data, loading, error, refetch}
}

export default useFetch
