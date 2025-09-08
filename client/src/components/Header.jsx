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
    <div className='pt-25 flex items-center justify-center flex-col gap-10 px-10 '>
         <div className='rounded-3xl p-1 bg-gradient-to-tl from-purple-700 to-red-300 w-3xs flex items-center justify-center '>
             <p className='text-center flex justify-between gap-3'>With integreded AI feature <img src={assets.star_icon} alt="" /></p>
         </div>
         <h1 className='text-5xl text-white/80 text-center'> <span className='text-red-500'>Blog</span> Freely, Blog Your Way</h1>
         <p className='text-gray-500 text-center'>Create, share, and explore blogs that inspire. Start writing today and build your personal space on the web.</p>
         <form onSubmit={onSubmitHandler} className='w-sm sm:w-xl md:w-2xl p-3 bg-gradient-to-br from-white/70 to-white/10 rounded-4xl flex flex-row justify-between '>
            <input ref={inputRef} className='sm:w-sm md:w-xl outline-none' type="text" placeholder='Search for Blogs' />
            <button className='bg-red-500 p-2 rounded-4xl' type='submit'>Search</button>
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
