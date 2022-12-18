import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BlogCrud, BlogEdit } from '../hooks/DataHooks';

const CrudForm = () => {

  const person = {
    id: 90,
    name: 'asldkl;'
  };

  const { id, name } = person;

  const [validate, setValidate] = useState(false)
  const { state } = useLocation();



  const { mutate, data, isError, isLoading, error, isSuccess } = BlogCrud();

  const { mutate: mutat, isLoading: load } = BlogEdit();

  const formik = useFormik({
    initialValues: {
      title: state?.title ?? '',
      body: state?.body ?? ''
    },
    validateOnChange: validate,
    onSubmit: (val) => {
      const newBlog = {
        title: val.title,
        body: val.body
      };
      if (state !== null) {
        mutat({
          title: val.title,
          body: val.body,
          id: state.id
        });
      } else {
        mutate(newBlog);
      }

    },
    validate: (val) => {
      setValidate(true);
      let errors = {};
      if (!val.title) {
        errors.title = 'please provide title';
      }

      // if (val.title === val.body) {
      //   errors.some = 'please provide unique values in title body';
      // }

      if (!val.body) {
        errors.body = 'please provide body';
      }

      return errors;

    }
  });

  // if (isSuccess) {
  //   nav('/');
  // }

  return (
    <div>
      <div className=" max-w-3xl mx-auto mt-10">
        <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input onChange={formik.handleChange} value={formik.values.title} className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Tile" />
            {formik.errors.title && <p className='text-pink-500'>{formik.errors.title}</p>}


          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
              Detail
            </label>
            <input onChange={formik.handleChange} value={formik.values.body} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="body" type="text" placeholder="detail" />
            {formik.errors.body && <p className='text-pink-500'>{formik.errors.body}</p>}

          </div>
          {/* {formik.errors.some && <p className='text-pink-500'>{formik.errors.some}</p>} */}

          {isLoading || load ? <div className='flex items-center  justify-center space-x-3'>
            <div className=' h-10 w-10 border-4 border-black rounded-full border-l-white animate-spin'></div>
            <h1>Loading please wait</h1>
          </div> : <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[50%] " type="submit">
            Submit
          </button>}
        </form>

      </div>
    </div>
  )
}

export default CrudForm
