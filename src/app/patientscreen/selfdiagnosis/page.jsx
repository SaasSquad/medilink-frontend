import Profileheader from '@/app/components/profileheader'
import React from 'react'

const SelfDiagnosis = () => {
  return (
    <div>
        <Profileheader />
        <div className='px-11'>
            <h1 className='my-12 text-2xl font-bold text-[#0059FD]'>What would you like to check</h1>
            <div>
                <div className='bg-[#0059FD] h-24 rounded-xl items-center flex px-4 mb-8'>
                    <div className='h-10 w-10 bg-slate-400'></div>
                    <p className='ml-8'>Model 1</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelfDiagnosis