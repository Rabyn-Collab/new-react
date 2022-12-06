import React from 'react'

const Blogs = ({ blogs, title, remove }) => {

  return (
    <div className='m-10 '>
      {blogs.map((blog, i) => {
        return <div key={blog.id} className='mb-5 shadow-lg bg-white p-7 max-w-4xl mx-auto'>
          <h1>{blog.title}</h1>
          <h2>{blog.body}</h2>
          <button onClick={() => remove(blog.id)}>Remove Item</button>
        </div>
      })}
    </div>
  )
}

export default Blogs
