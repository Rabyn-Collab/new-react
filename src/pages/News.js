import React from 'react'
import { useNavigate } from 'react-router-dom';
import { NewsFetch } from '../hooks/DataHooks'

const News = () => {
  const { isLoading, isError, data, isSuccess, error } = NewsFetch();

  const navs = useNavigate();
  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-10'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_a2chheio.json" background="transparent" loop autoplay></lottie-player>
    </div>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }


  const handleClick = (article) => {
    navs('/detail', {
      state: {
        title: article.title,
        image: article.media,
        detail: article.summary
      }
    });
  }

  return (
    <div className='grid grid-cols-4 gap-2 p-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 cursor-pointer' >
      {data && data.data.articles.map((a, i) => {
        return <div key={i} className='shadow-xl' onClick={() => handleClick(a)}>
          <img className='h-72 w-full ' src={`${a.media}`} alt="" />
          <div className='p-2'>
            <h1>{a.title}</h1>
            <h2>News by {a.author}</h2>
          </div>
        </div>
      })}
    </div>
  )
}

export default News
