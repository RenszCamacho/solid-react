import axios from 'axios'
import { TodoType } from '../interfaces'

const URL = 'https://jsonplaceholder.typicode.com/todos'

/**
 * Just one responsability: fetch data from API
 */

export const fetchData = async (): Promise<TodoType[] | void> => {
  try {
    const response = await axios.get<TodoType[]>(URL)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
