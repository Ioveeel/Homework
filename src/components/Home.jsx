import React from 'react'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Modal from './Modal'
import Table from './Table';

const Home = () => {
  return (
    <>
    <div className='m-8 flex justify-between '>

        <div>
          <SearchIcon className='mt-[12px] mr-4 '/>
          <TextField id="standard-basic" variant="standard"  sx={{
              width: 400,
              height:5
            }} />
        </div>
        <div className="">
          <Modal/>
        </div>
        {/* Table */}
    </div>
        <div className='mt-16'>
          <Table/>
          </div>
        </>
  )
}

export default Home