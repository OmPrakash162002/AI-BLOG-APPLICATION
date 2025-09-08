import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
 
    const {title,createdAt}  = blog;
    const BlogDate = new Date(createdAt);

    const {axios} = useContext(AppContext);

    const deleteBlog = async ()=>{
      const confirm = window.confirm('Are you sure want to delete this blog')
      if(!confirm) return;
      try {
        const {data} = await axios.post('/api/blog/delete', {id : blog._id})
        if(data.success){
          toast.success(data.message)
          await fetchBlogs()
        }else{
          toast.error(data.message)
        }    
      } catch (error) {
        toast.error(error.message)
      }
    }


    const togglePublish = async ()=>{
     try {
       const {data} = await axios.post('/api/blog/toggle-publish', {id : blog._id})
       if(data.success){
         toast.success(data.message)
         await fetchBlogs()
       }else{
         toast.error(data.message)
       }
     } catch (error) {
        toast.error(error.message)
     }
    }


  return (
    <tr  className=" border-t border-gray-700 hover:bg-white/5 ">
      <td className="py-3 px-2">{index}</td>
      <td className="py-3 px-2">{title}</td>
      <td className="py-3 px-2">{BlogDate.toDateString()}</td>
      <td className="py-3 text-green-400 px-2 text-xs md:text-sm ">{blog.isPublished ? 'Published ' : 'Unpublished'}</td>
      <td className="py-3 flex flex-row gap-3 items-center min-w-[120px]">
        <button onClick={togglePublish} className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg md:text-sm cursor-pointer text-xs">
       {blog.isPublished ? 'Unpublish ' : 'Publish'}
        </button>
        <img onClick={deleteBlog} src={assets.cross_icon} className="w-6 hover:scale-110 transition-all cursor-pointer" alt="image" />
      </td>
    </tr>
  );
};

export default BlogTableItem;
