import React from 'react'
import Home from './Component/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import Project from './Component/Project/Project'
import Blog from './Component/Blog/Blog'
import Contact from './Component/Contact/Contact'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}
export default App
