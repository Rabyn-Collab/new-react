import React from 'react'
import { NavLink } from 'react-router-dom'

const Tail = () => {
  return (
    <div>
      <NavLink to='/about'>About Page</NavLink>
      <NavLink to='/news'>News Page</NavLink>
      <h1>hello world</h1>
      <div className='
      h-52 w-52 bg-pink-400 m-9 
      border-8 border-gray-700  p-5
      '>
        <h1>Hello world</h1>
      </div>


    </div>
  )
}

export default Tail
