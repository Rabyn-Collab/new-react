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

  const [number, setNumber] = useState(20);

  const ob = {
    title: 'askldj',
    data: 'asldklsa;d'
  }
  console.log(ob.title);

  const callData = async () => {
    const response = await axios.get('https://638ebcce4ddca317d7e50201.mockapi.io/blogs');
    setBlogs(response.data)

  }
  useEffect(() => {
    callData();
  }, []);

  // setTimeout(() => {
  //   console.log('hello world');
  // }, 2000)


  //function as props
  const handleDelete = (id) => {
    const newBlog = blogs.filter((b) => b.id !== id);
    setBlogs(newBlog);
  }

  return (
    <div>
      <button onClick={() => setNumber(100)}>Change</button>
      <Blogs blogs={blogs} title={'blogtitle'} remove={handleDelete} />
    </div>
  )
}

export default Home
