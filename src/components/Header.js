import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const id = '1245647';
  return (
    <div className='shadow-lg bg-white p-4'>
      <div className='flex justify-between max-w-4xl mx-auto items-baseline '>
        <h1 className='text-2xl font-semibold text-pink-500'>Blogs</h1>
        <nav className='space-x-5 font-semibold '>
          <NavLink to='/' replace={true} className='hover:bg-orange-300 hover:text-white'>Home</NavLink>
          <NavLink to='/about' >About</NavLink>
          <NavLink to='/' className=''>Create</NavLink>
          {/* <NavLink to='/sample/something' className=''>Create</NavLink>
          <NavLink to={`sample/${id}`} className=''>Create</NavLink> */}
        </nav>
      </div>

    </div>
  )
}

export default Header
