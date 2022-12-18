import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BlogRemove } from '../hooks/DataHooks';

const Blogs = ({ blogs }) => {
  const navigate = useNavigate();
  const { mutate, isError, isLoading, error } = BlogRemove();

  return (
    <div className='m-10 '>
      {blogs.map((blog, i) => {
        return <div key={blog.id} className='mb-5 shadow-lg bg-white p-7 max-w-4xl mx-auto space-y-2'>
          <h1>{blog.title}</h1>
          <h2>{blog.body}</h2>
          <button onClick={() => navigate('/crud', {
            state: {
              title: blog.title,
              body: blog.body,
              id: blog.id

            }
          })} className='mr-4 '><i className="fa-solid fa-pen-to-square text-green-400"></i></button>


          <button onClick={() => mutate(blog.id)}><i className="fa-solid fa-trash text-pink-500"></i></button>

        </div>
      })}
    </div>
  )
}

export default Blogs
