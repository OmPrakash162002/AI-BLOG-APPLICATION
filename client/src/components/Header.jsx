import React, { useContext, useRef } from 'react'
import {assets} from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Header = () => {

  const {setInput, input} = useContext(AppContext);

  const inputRef = useRef()
  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear =()=>{
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className='pt-25 flex items-center justify-center flex-col gap-10 px-10  '>
         <div className='rounded-3xl  border border-white/50  bg-gradient-to-tl from-purple-950 to-pink-950  p-2 px-3  flex items-center justify-center '>
             <p className='text-center text-sm flex justify-between gap-3'>New : With integreded AI feature <img src={assets.star_icon} alt="" /></p>
         </div>
         <h1 className='text-6xl font-bold text-white text-center'> Blog freely, <br /> <span className='bg-gradient-to-b from-purple-600 to-orange-600 bg-clip-text text-transparent'>blog</span> your way</h1>
         <p className='text-white/80 text-center '>Create, share, and explore blogs that inspire. <br /> Start writing today and build your personal space on the web.</p>
         <form onSubmit={onSubmitHandler} className='w-sm sm:w-xl md:w-2xl p-3 border border-white/80 rounded-md flex flex-row justify-between backdrop-blur-3xl'>
            <input ref={inputRef} className='sm:w-sm md:w-xl outline-none' type="text" placeholder='Search for Blogs' />
            <button className='bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-100 text-black hover:scale-105 p-2 rounded-md cursor-pointer' type='submit'>Search</button>
         </form>
         <div className='text-center'>
          {
            input &&  <button onClick={onClear} className='border font-light text-xs py-1 px-2 rounded-sm shadow-2xl cursor-pointer'>Clear Search</button>
            }
         </div>
        
    </div>
  )
}

export default Header
