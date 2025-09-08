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
    <div className="flex flex-col gap-10">
       <div className='px-10 pt-10 flex gap-15 items-center justify-center relative '>
           {blogCategories.map((item)=>(
            <div key={item} className='relative'>
            <button className={`pt-2 px-2 ${menu == item && 'text-white '}`} onClick={()=>setMenu(item)}>{item}
            {menu === item && (
              <motion.div layoutId='underline'
               transition={{type : 'spring', stiffness: 500, damping:30}}
               className='absolute top-0 left-0 right-0  bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg p-5 opacity-80  rounded-full'></motion.div>
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
