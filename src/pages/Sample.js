import React from 'react'
import { useParams } from 'react-router-dom'

const Sample = () => {
  // const m = {
  //   id: 'lio'
  // };
  // const { id } = m;
  // console.log(id);

  const { id } = useParams();

  return (
    <div>
      <h1>Sample Page {id}</h1>
    </div>
  )
}

export default Sample
