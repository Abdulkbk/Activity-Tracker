import { useState } from 'react'
import Form from './Form'
import Todos from './Todos'

function Board() {
  const [todos, setTodos] = useState([])
  return (
    <div className='container relative w-2/3 h-2/3 mt-8 cus-bg-1 rounded-lg'>
      <Form />
      <Todos />
    </div>
  )
}

export default Board
