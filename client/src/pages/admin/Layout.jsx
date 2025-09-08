import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar';
import { AppContext } from '../../context/AppContext';


const Layout = () => {
   
    const{axios, setToken, navigate} = useContext(AppContext)

    const logout = ()=>{
      localStorage.removeItem('token')
      axios.defaults.headers.common['Authorization'] = null;
      setToken(null)
      navigate('/')
    }

  return (
    <>
    <div className='fixed backdrop-blur-lg top-0 left-0 right-0 z-50 flex flex-row justify-between px-10 items-center'>
       <img className=' h-20 cursor-pointer' onClick={()=>navigate('/')} src='logo.png' alt="logo" />
       <button onClick={logout} className='text-sm px-8 py-2  bg-purple-500/80 rounded-full cursor-pointer'>Logout</button>
    </div>
    <div className="flex mt-20">
    <Sidebar />
    <div className="flex-1 px-2">
        <Outlet />
    </div>
</div> 
  </>)
}

export default Layout
