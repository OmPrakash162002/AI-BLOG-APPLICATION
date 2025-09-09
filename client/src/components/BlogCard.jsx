import React from 'react'
import {useNavigate} from 'react-router-dom';
const BlogCard = ({blog}) => {

  const navigate = useNavigate()

  const{title, description, category, image, _id} = blog;
  return (
    <div className='w-full rounded-xl overflow-hidden shadow hover:scale-102 hover:shadow-black duration-300 cursor-pointer backdrop-blur-xl border border-white/50  bg-gradient-to-tr from-white/40 to-white/10' onClick={()=>navigate(`/blog/${_id}`)}>
       <img src={image} alt="" className='aspect-video pb-4' />
       <span className='px-2 ml-2 bg-white/20 border border-white/80  rounded-full  text-white/80'>{category}</span>
       <div className='px-2 pt-5'>
        <h5 className='font-bold pb-2 text-black/90'>{title}</h5>
        <p dangerouslySetInnerHTML={{"__html" : description.slice(0,80)}} className='text-black/90'></p>
       </div>
    </div>
  )
}

export default BlogCard
