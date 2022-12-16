import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CrudForm from './components/CrudForm'
import Header from './components/Header'
import About from './pages/About'
import Detail from './pages/Detail'
import Home from './pages/Home'
import News from './pages/News'
import NotFound from './pages/NotFound'
import Tail from './pages/Tail'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='crud' element={<CrudForm />} />
        <Route path='news' element={<News />} />
        <Route path='detail' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
