import React from 'react'

const Header = () => {
  return (
    <div className='shadow-lg bg-white p-4'>
      <div className='flex justify-between max-w-4xl mx-auto items-baseline '>
        <h1 className='text-2xl font-semibold text-pink-500'>Blogs</h1>
        <nav className='space-x-5 font-semibold '>
          <a href="" className='hover:bg-orange-300 hover:text-white'>Home</a>
          <a href="" className=''>About</a>
          <a href="" className=''>Contact</a>
        </nav>
      </div>

    </div>
  )
}

export default Header
