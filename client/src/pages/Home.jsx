import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-blue-700 to-black'>
      <Navbar></Navbar>
      <Header></Header>
      <BlogList></BlogList>
      <Footer></Footer>
    </div>
  )
}

export default Home
