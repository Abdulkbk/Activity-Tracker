import { useState } from 'react'

function Form() {
  return (
    <div className='flex w-full justify-around pt-5 '>
      <div className='w-2/3 p-1'>
        <input
          type='text'
          placeholder='Write the activity here!'
          className='cus-bg-2 p-2 ml-2 rounded w-full'
        />
      </div>
      <div className='w-1/3 p-1 mr-1 flex justify-center'>
        <button className='cus-bg-2 p-2 rounded w-1/2'>Add</button>
      </div>
    </div>
  )
}

export default Form
