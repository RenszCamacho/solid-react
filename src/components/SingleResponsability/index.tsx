import { useData } from './hooks/useData'

/**
 * Just one responsability: A component to show the data
 */

export const SingleResponsability = () => {
  const { data, isFetching } = useData()

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
