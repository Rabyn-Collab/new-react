import React from 'react'
import Blogs from '../components/Blogs';
import { BlogFetch } from '../hooks/DataHooks'


const Home = () => {
  const { data, error, isLoading, isError } = BlogFetch();

  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-10'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_a2chheio.json" background="transparent" loop autoplay></lottie-player>
    </div>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }


  return (
    <div className=''>

      {data && <Blogs blogs={data.data} />}
      {/* <News /> */}

    </div >
  )
}

export default Home
