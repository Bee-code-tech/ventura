import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between px-4 '>
      <h1 className="text-bold text-blue-200 font-xl">
        Ventura
      </h1>
      <div className="">
        <div className="p-4 bg-blue-500 text-white rounded-md">
            Connect wallet
        </div>
      </div>
    </div>
  )
}

export default Navbar