import Profileheader from '@/app/components/Profileheader'
import React from 'react'

const ViewProfessional = () => {
  return (
    <div>
        <Profileheader />
        <div className='items-center justify-center flex flex-col mt-16'>
            <div className='bg-slate-500 h-32 w-32 rounded-full'></div>
            <div className='flex flex-col justify-center items-center my-6'>
                <h1 className='text-xl font-bold text-[#0059FD]'>John Doe</h1>
                <h3 className='text-[#0059FD]'>Physiotherapist</h3>
            </div>
            <div className='flex'> 
                <button className='bg-[#0059FD] text-white px-4 py-2 mr-8'>View Schedule</button>
                <button className=' bg-slate-400 text-black px-4 py-2'>Chat Now</button>
            </div>
            <input type="text" className=' h-56 w-56 bg-slate-300 mt-4' />
        </div>
    </div>
  )
}

export default ViewProfessional