import React from 'react'

function MediLink() {
  return (
    <>
    {/* <div className='h-[100vh] w-[100vw] bg-[rgb(0,89,253)] text-center justify-center'><h1 className='pt-[50vh] text-white text-4xl'>MediLink</h1>
    </div> */}
    <div className='h-[100vh] w-[100vw] items-center flex flex-col'>
        <h1 className='text-[#0059FD] text-3xl mt-24'>MediLink</h1>
        <div className=' mt-20 flex flex-col bg-[#D9D9D959] w-[80vw] h-[50vh] rounded-3xl items-center justify-center'>
            <button className='text-2xl w-40 text-white bg-[#0059FD] rounded-2xl mb-10 py-2'>Login</button>
            <button className='text-2xl w-40 text-white bg-[#0059FD] rounded-2xl mb-10 py-2'>Register</button>
        </div>
    </div>
    </>
  )
}

export default MediLink 