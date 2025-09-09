import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='relative'>
      <img className='absolute -z-1 bottom-0 blur-xs' src="glass.jpg" alt="" />
      <Navbar></Navbar>
      <Header></Header>
      <BlogList></BlogList>
      <Footer></Footer>
    </div>
  )
}

export default Home
