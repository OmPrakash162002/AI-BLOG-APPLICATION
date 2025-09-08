import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';


const Navbar = () => {

    const{navigate,token} = useContext(AppContext);

  return (
    <>
     <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      
      <div className="flex-shrink-0 flex items-center">
        
        <div onClick={()=>navigate('/')} className="w-15 h-15  rounded-md flex items-center cursor-pointer ">
          <img  className='cursor-pointer' src="logo.png" alt="" />
          <h1 className='font-bold '>AI Blog</h1>
        </div>
      </div>
      <div onClick={()=>navigate('/admin')} className=" md:flex items-center space-x-6">
        <a href="#"
          className="px-4 py-2 rounded-2xl text-white font-semibold bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-600 hover:to-pink-600 transition duration-300">
          {token ? 'Dashboard' : 'Login'}
        </a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
