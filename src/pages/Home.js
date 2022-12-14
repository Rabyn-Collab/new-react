import React from 'react'
import Blogs from '../components/Blogs';
import { BlogFetch } from '../hooks/DataHooks'
import News from './News';

const Home = () => {

  const { data, isLoading, error, isError } = BlogFetch();

  return (
    <div className=''>
      {/* {data && <Blogs blogs={data.data} />} */}
      <News />
    </div >
  )
}

export default Home
