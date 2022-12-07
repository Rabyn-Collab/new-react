import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Blogs from '../components/Blogs';





const Home = () => {

  // String, number and array can be shown
  const label = 'hello world';
  const rating = 7.5;
  const data = [22, 77, 99];

  const [blogs, setBlogs] = useState([]);
  const [score, setScore] = useState([]);
  const [news, setNews] = useState([]);


  const callData = async () => {

    try {
      const response = await axios.get('https://638ebcce4ddca317d7e50201.mockapi.io/blogs');
      setBlogs(response.data)
    } catch (error) {
      console.log(error.message);
    }

  }

  const callData1 = async () => {
    const response = await axios.get('https://free-football-soccer-videos1.p.rapidapi.com/v1/', {
      headers: {
        'X-RapidAPI-Key': 'a5f227e63fmsh1662507e838257fp171f14jsna0bec840d641',
        'X-RapidAPI-Host': 'free-football-soccer-videos1.p.rapidapi.com'
      }
    });
    setScore(response.data)
  }


  const callData2 = async () => {
    const response = await axios.get('https://free-news.p.rapidapi.com/v1/search', {
      headers: {
        'X-RapidAPI-Key': 'a5f227e63fmsh1662507e838257fp171f14jsna0bec840d641',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
      },
      params: {
        'q': 'hollywood',
        'lang': 'en'
      }
    });
    setNews(response.data)
  }


  useEffect(() => {
    // callData2();
    // callData1();
    callData();
  }, []);

  const data1 = {
    status: 'ok',
    articles: [
      {}
    ]
  };
  console.log(news);


  // setTimeout(() => {
  //   console.log('hello world');
  // }, 2000)


  //function as props
  const handleDelete = (id) => {
    const newBlog = blogs.filter((b) => b.id !== id);
    setBlogs(newBlog);
  }

  const title = 'hello world';



  return (
    <div>

      {/* {news?.articles?.map((a, i) => {
        return <div key={i}>
          <h1>{a.title}</h1>
        </div>
      })} */}
      <h1>{`hello ${title}`}</h1>
      {score.map((s, i) => {
        return <div key={i}>
          <h1 className='text-2xl'>{s.title}</h1>
          <img src={`${s.thumbnail}`} alt="" className='h-60 w-60 mb-5' />
        </div>
      })}

      <Blogs blogs={blogs} title={'blogtitle'} remove={handleDelete} />
    </div>
  )
}

export default Home
