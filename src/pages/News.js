import React from 'react'
import { NewsFetch } from '../hooks/DataHooks'

const News = () => {
  const { isLoading, isError, data, isSuccess, error } = NewsFetch();


  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }


  // const d = {
  //   data: {
  //     articles: [
  //       {
  //         title: ''
  //       },
  //       {}
  //     ],
  //     status: ''
  //   },
  //   config: {}
  // };
  // console.log(data);
  return (
    <div className='p-10'>
      {data && data.data.articles.map((a, i) => {
        return <div key={a._id} className='mb-2'>
          <h1 className='text-2xl mb-5'>{a.title}</h1>
          <img src={`${a.media}`} alt="" className='h-[500px] w-[200px] ' />
          <h1 className='my-2 text-slate-600'>{a.summary}</h1>
        </div>
      })}
    </div>
  )
}

export default News
