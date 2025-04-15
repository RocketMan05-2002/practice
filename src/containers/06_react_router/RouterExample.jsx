import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

const RouterExample = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/about' element={<About />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterExample
