import React, { useContext, useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import {motion} from 'motion/react'
import BlogCard from './BlogCard';
import { AppContext } from '../context/AppContext';

const BlogList = () => {

  const [menu, setMenu] = useState('All');
  const{blogs, input} = useContext(AppContext);

  const filteredBlogs = ()=>{
    if(input === ''){
      return blogs
    }
    return blogs.filter((blog)=> blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
  }

  return (
    <div className="flex flex-col gap-10 items-center ">
       <div className='flex gap-1 sm:gap-4 items-center justify-center  rounded-full sm:w-xl md:w-3xl   '>
           {blogCategories.map((item)=>(
            <div key={item} className='relative px-3.5'>
            <button className={` px-2 ${menu === item && 'text-blue-600'}`} onClick={()=>setMenu(item)}>{item}
            {menu === item && (
              <motion.div layoutId='underline'
               transition={{type : 'spring', stiffness: 500, damping:30}}
               className='absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-br from-white/40 to-white/10  border border-white/50 shadow-lg  opacity-60   rounded-3xl px-8'></motion.div>
            )}
            </button>
            </div>
           ))}
       </div>
       {/* blog cards */}
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
            {filteredBlogs().filter((blog)=> menu === 'All' ? true : blog.category === menu).map((blog)=> <BlogCard key={blog._id} blog={blog}></BlogCard>)}
       </div>
    </div>
  )
}

export default BlogList
