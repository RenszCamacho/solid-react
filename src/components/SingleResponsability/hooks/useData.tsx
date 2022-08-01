import { useEffect, useState } from 'react'

import { TodoType } from '../interfaces'
import { fetchData } from '../services/fetchData'

/**
 * Just a hook to set the data
 */

export const useData = () => {
  const [data, setData] = useState<TodoType[]>([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    fetchData()
      .then((data) => setData(data!))
      .finally(() => setIsFetching(false))
  }, [])

  return {
    data,
    isFetching,
    setIsFetching
  }
}
