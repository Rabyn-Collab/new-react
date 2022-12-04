import React from 'react'
import DataList from './components/DataList';

const App = () => {

  const data = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": true
    },
  ];


  return (
    <div>
      <DataList title={'hello page 2'} dataList={data} />
    </div>
  )
}

export default App
