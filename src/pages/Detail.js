import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const Detail = () => {

  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='p-5 space-y-5'>
      <h1 className='text-2xl font-semibold'>{state.title}</h1>
      <img src={state.image} alt="" />
      <p className='text-slate-500 '>{state.detail}</p>
    </div>
  )
}

export default Detail
