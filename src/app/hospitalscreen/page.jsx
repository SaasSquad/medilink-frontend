import React from 'react'

const HospitalScreen = () => {
  return (
    <>
    <div>
      <div className='flex flex-row h-20 bg-[#0059FD] items-center px-8'>
        <h1 className='text-white text-2xl'>Red cross Hospital</h1>
        <div className=' h-14 w-14 bg-slate-400 ml-auto rounded-full'></div>
      </div>
      <div className='px-8 mt-14'>
        <h1 className='text-3xl text-[#0059FD] font-bold'>What would you like to do today?</h1>
        <div className='mt-10'>
          <div className='bg-[#0059FD] rounded-2xl flex h-24 items-center px-4 my-8'>
          <div className='h-10 w-10 bg-white'></div><button className='text-white text-xl ml-8'>Manage appointment</button>
          </div>
          <div className='bg-[#0059FD] rounded-2xl flex h-24 items-center px-4'>
          <div className='h-10 w-10 bg-white'></div><button className='text-white text-xl ml-8'>Doctor Management</button>
          </div>
          <div className='bg-[#0059FD] rounded-2xl flex h-24 items-center px-4 mt-8'>
          <div className='h-10 w-10 bg-white'></div><button className='text-white text-xl ml-8'>Register a hospital</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HospitalScreen;