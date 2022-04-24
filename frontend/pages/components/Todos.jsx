import deleteBtn from '../../public/checked.svg'

function Todos() {
  return (
    <div className='container h-3/4 w-full p-1 mt-8 rounded flex flex-col items-center'>
      <div className='flex w-full justify-around items-center cus-bg-5 my-1 rounded'>
        <div className='cus-text w-4/5 pl-2'>Take out the Trash</div>
        <div className='flex flex-col w-full w-1/5 p-3'>
          <span className='w-full flex justify-center'>
            <img className='h-5' src='/checked.svg' alt='' />
          </span>
          <span className='w-full flex justify-center'>
            <img className='h-5' src='/delete.svg' alt='' />
          </span>
        </div>
      </div>
      <div className='flex w-full justify-around items-center cus-bg-6 my-1 rounded'>
        <div className='cus-text w-4/5 pl-2'>Take out the Trash</div>
        <div className='flex flex-col w-full w-1/5 p-3'>
          <span className='w-full flex justify-center'>
            <img className='h-5' src='/checked.svg' alt='' />
          </span>
          <span className='w-full flex justify-center'>
            <img className='h-5' src='/delete.svg' alt='' />
          </span>
        </div>
      </div>
      <div className='flex w-full justify-around items-center cus-bg-5 my-1 rounded'>
        <div className='cus-text w-4/5 pl-2'>Take out the Trash</div>
        <div className='flex flex-col w-full w-1/5 p-3'>
          <span className='w-full flex justify-center'>
            <img className='h-5' src='/checked.svg' alt='' />
          </span>
          <span className='w-full flex justify-center'>
            <img className='h-5' src='/delete.svg' alt='' />
          </span>
        </div>
      </div>
      <div className='flex w-full justify-around items-center cus-bg-6 my-1 rounded'>
        <div className='cus-text w-4/5 pl-2'>Take out the Trash</div>
        <div className='flex flex-col w-full w-1/5 p-3'>
          <span className='w-full flex justify-center'>
            <img className='h-5' src='/checked.svg' alt='' />
          </span>
          <span className='w-full flex justify-center'>
            <img className='h-5' src='/delete.svg' alt='' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Todos
