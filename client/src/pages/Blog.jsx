import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets';
import Moment from 'moment'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LoadingPage from '../components/LoadingPage';
import { AppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Blog = () => {
  const {id} = useParams();

  const {axios} = useContext(AppContext)

  const[data,setData] = useState(null);
  const[comments,setComments] = useState([]);
  const[name, setName] = useState('')
  const[content, setContent] = useState('')


  const fetchBlogData = async ()=>{
    try {
      const {data} = await axios.get(`/api/blog/${id}`)
      data.success ? setData(data.blog) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const fetchComments = async () =>{
    try {
      const {data} = await axios.post('/api/blog/comments', {blogId : id})
      if(data.success){
        setComments(data.comments)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }

  }

  const addComment = async(e)=>{
      e.preventDefault();
      try {
        const {data} = await axios.post('/api/blog/add-comment', {blog : id, name, content});
        if(data.success){
          toast.success(data.message)
          setName('')
          setContent('')
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
  }

  useEffect(()=>{
     fetchBlogData();
     fetchComments();
  },[])

  return data ? (
    <>
    <Navbar></Navbar>
   <div className="pt-20 min-h-screen flex items-center justify-center p-4 bg-cover bg-center " 
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${data.image})` }}>
        
      
      <div className="max-w-4xl w-full glass bg-gradient-to-bl from-blue-500/50 to-white/10 rounded-2xl shadow-lg p-6 text-white">
        
        {/* Blog Header */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-200">Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">{data.title}</h1>
          <h2 className="text-lg md:text-xl text-gray-300 mt-2 italic">{data.subTitle}</h2>
          <p className="mt-3 text-gray-200">By <span className="font-semibold">John Doe</span></p>
        </div>

        {/* Image */}
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-6">
          <img 
            src={data.image}
            alt="Blog" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Description */}
        <div className="mb-6 text-white leading-relaxed rich-text" dangerouslySetInnerHTML={{__html: data.description}}>
        
        </div>

        {/* Comment Section */}
        <div className="glass p-4 rounded-xl mt-8">
          <h3 className="text-xl font-semibold mb-4">Comments ({comments.length})</h3>

          {/* Existing Comments */}
          <div className="space-y-4 mb-4">
          
              {comments.map((item,index)=>(
              <div key={index} className="p-3 glass rounded-xl">
                <div className='flex flex-row gap-2 items-center'>
                  <img className='h-10' src={assets.user_icon} alt="" />
                  <p>{item.name}</p>
                </div>
              <p className="text-gray-100 px-15">{item.content}</p>
              <div className='px-15'>{Moment(item.createdAt).fromNow()}</div>
            </div>
              ))}
            
          </div>

          {/* Add Comment */}
          <div>
            <h3 className='font-bold text-xl'>Add your comment</h3>
            <form onSubmit={addComment}>
              <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full p-3 rounded-xl bg-transparent border border-gray-300 text-white focus:outline-none mb-5' placeholder='Name'/>
              <textarea onChange={(e)=>setContent(e.target.value)} value={content} 
              placeholder="Write a comment..." 
              className="w-full p-3 rounded-xl bg-transparent border border-gray-300 text-white focus:outline-none" 
              ></textarea>

              <button type='submit' className="mt-3 px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition">
              Post Comment
            </button>
            </form>
            
          </div>
        </div>

      </div>
      
    </div>
    <Footer></Footer>

 </> ):(<LoadingPage></LoadingPage>)
}

export default Blog
