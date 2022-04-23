import { useState } from 'react'
import Form from './Form'

function Board() {
  const [todos, setTodos] = useState([])
  return (
    <div className='container relative w-1/3 bg-green-300 h-2/3 mt-8 cus-bg-1 rounded-lg'>
      <Form />
    </div>
  )
}

export default Board
