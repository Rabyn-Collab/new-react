import React from 'react'
import { useState } from 'react';
import Blogs from '../components/Blogs';

const Home = () => {

  // String, number and array can be shown
  const label = 'hello world';
  const rating = 7.5;
  const data = [22, 77, 99];

  const [blogs, setBlogs] = useState([
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": true
    },
  ]);


  //function as props
  const handleDelete = (id) => {
    const newBlog = blogs.filter((b) => b.id !== id);
    setBlogs(newBlog);
  }

  return (
    <div>

      <Blogs blogs={blogs} title={'blogtitle'} remove={handleDelete} />
    </div>
  )
}

export default Home
