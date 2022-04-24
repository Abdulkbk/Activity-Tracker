import { useState } from 'react'

function Form() {
  return (
    <div className='flex w-full justify-around pt-5 '>
      <div className='w-2/3 p-1 mx-1'>
        <input
          type='text'
          placeholder='Write the activity here!'
          className='cus-bg-1 p-2 ml-2 rounded w-full focus:outline-none border border-2 border-cus-8'
        />
      </div>
      <div className='w-1/3 p-1 mr-1 flex justify-center mx-1'>
        <button className='cus-bg-8 p-2 rounded w-full cus-text'>Add</button>
      </div>
    </div>
  )
}

export default Form
