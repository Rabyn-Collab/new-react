import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NewsFetch } from '../hooks/DataHooks'

const News = () => {
  const [catetgory, setCategory] = useState('hollywood');

  const { isLoading, isError, data, isSuccess, error } = NewsFetch(catetgory);


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

  const changeNews = (query) => {
    setCategory(query);

  }


  return (
    <div>
      <button onClick={() => changeNews('hollywood')} className='mr-4'>Hollywood</button>
      <button onClick={() => changeNews('games')}>Games</button>
      <div className='grid grid-cols-4 gap-2 p-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 cursor-pointer'>
        {data && data.data.articles.map((a, i) => {
          return <div key={i} className='shadow-xl' onClick={() => handleClick(a)}>
            <img className='h-72 w-full ' src={`${a.media}`} alt="" />
            <div className='p-2'>
              <h1 className='sm:text-red-600'>{a.title}</h1>
              <h2>News by {a.author}</h2>
            </div>
          </div>
        })}
      </div>



    </div>
  )
}

export default News
