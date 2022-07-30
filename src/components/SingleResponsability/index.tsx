import { useEffect, useState } from 'react'

import axios from 'axios'

interface TodoType {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export const SingleResponsability = () => {
  const [data, setData] = useState<TodoType[]>([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    axios
      .get<TodoType[]>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  if (isFetching) {
    return <div>Loading...</div>
  }

  return (
    <ul>
        {data.map((todo) => (
            <li key={todo.id}>
              <span>{todo.id}</span>
              <span>{todo.title}</span>
            </li>
        ))}
    </ul>
  )
}
