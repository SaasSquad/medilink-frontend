import React from 'react'

const Bookappointment = () => {
  return (
<>
<div className='h-[100vh] w-[100vw]'>
<div className='flex flex-row h-20 bg-[#0059FD] items-center px-8'>
        <h1 className='text-white text-2xl'>Hello John</h1>
        <div className=' h-14 w-14 bg-slate-400 ml-auto rounded-full'></div>
      </div>
      <div className=' px-11 my-8'>
        <h1 className='text-2xl font-bold text-[#0059FD] my-10'>Book an apponitment</h1>
        <div className='flex flex-col'>
            <input type="text" className='border-4 border-[#0059FD] rounded-md py-2 px-4' placeholder='Find a health professonal' />
            <button className='mr-auto my-8 border-2 border-[#0059FD] px-4 py-1 font-bold rounded-xl'>Filter</button>
        </div>
        <div className=' border-[#0059FD] border-4 h-32 rounded-xl flex items-center px-4 my-14'>
            <div className='border-[#0059FD] border-4 w-16 h-14 rounded-xl'>
            </div>
            <div className='ml-8 items-center justify-center flex flex-col'>
                <div className=' items-center justify-center flex flex-col mb-2'>
                    <h3 className='font-bold text-[#0059FD] text-xl'>John Doe</h3>
                    <h5 className='font-bold text-[#0059FD]'>Physiotherapist</h5>
                </div>
                <div>
                    <button className='px-3 py-1 border-2 border-[#0059FD] rounded-xl mr-4'>Chat</button>
                    <button className='px-3 py-1 border-2 border-[#0059FD] rounded-xl'>Book</button>
                </div>
            </div>
        </div>
      </div>
</div>
</>  )
}

export default Bookappointment