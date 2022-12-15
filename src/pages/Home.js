import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Blogs from '../components/Blogs';
import CrudForm from '../components/CrudForm';
import { BlogCrud, BlogFetch } from '../hooks/DataHooks'
import News from './News';

const Home = () => {
  const { mutate, data, error } = BlogCrud();

  return (
    <div className=''>

      <CrudForm />

      {/* {data && <Blogs blogs={data.data} />} */}
      {/* <News /> */}

    </div >
  )
}

export default Home
