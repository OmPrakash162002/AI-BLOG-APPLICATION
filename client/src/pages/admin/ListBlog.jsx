import React, { useContext, useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';
import { AppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ListBlog = () => {

  const [blogs, setBlogs] = useState([]);
  const {axios} = useContext(AppContext);

  const fetchBlogs = async () =>{
    try {
      const{data} = await axios.get('/api/admin/blogs')
      if(data.success){
        setBlogs(data.blogs)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
     fetchBlogs();
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 mb-5'>
      <h1 className='mb-5 text-lg'>All blogs</h1>
       <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Latest Blogs</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-300">
                <th className="pb-3">#</th>
                <th className="pb-3">Blog Title</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Actions</th>
              </tr>
            </thead>
            <tbody>
               {blogs.map((blog,index)=>(
                <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1}/>
               ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListBlog
