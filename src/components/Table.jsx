import React from 'react'


const Table = () => {
  return (
    <>
    <div className='flex pb-2 flex-col'>
        <div className='flex border-b-2 gap-28  justify-center  '>
            <h3>სახელი</h3>
            <h3>გვარი</h3>
            <h3>პირადი ნომერი</h3>
            <h3>სქესი</h3>
            <h3>დაბადების თარიღი</h3>
            <h3>დაბადების ადგილი</h3>
            <h3>მისამართი</h3>
        </div>
        <div className='flex mt-4  '>
        <p className='mr-32 ml-[90px]'>სახელი</p>
            <p className='mr-32'>გვარი</p>
            <p className='mr-32'>პირადი ნომერი</p>
            <p className='mr-32'>სქესი</p>
            <p className='mr-32'>დაბადების თარიღი</p>
            <p className='mr-32'>დაბადების ადგილი</p>
            <p className=''>მისამართი</p>
        </div>

        </div>
       
        </>
  )
}

export default Table