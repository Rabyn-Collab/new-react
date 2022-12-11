import React from 'react'
import Blogs from '../components/Blogs';
import Header from '../components/Header'
import { BlogFetch } from '../hooks/DataHooks'

const Home = () => {

  const { data, isLoading, error, isError } = BlogFetch();
  console.log(data);
  return (
    <div>
      {data && <Blogs blogs={data.data} />}
    </div>
  )
}

export default Home
