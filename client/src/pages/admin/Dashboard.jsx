import React, { useContext, useEffect, useState } from 'react'
import { dashboard_data } from '../../assets/assets'
import { FileText, MessageSquare, FilePlus, EyeOff } from "lucide-react";
import BlogTableItem from '../../components/admin/BlogTableItem';
import { AppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';


const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState({
        blogs : 0,
        comments : 0,
        draft : 0,
        recentBlogs : []
    })

    const {axios} = useContext(AppContext)

  
    const fetchDashboard = async ()=>{
        try {
          const {data} = await axios.get('/api/admin/dashboard')
          data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
        } catch (error) {
          toast.error(error.message)
        }
    }

    useEffect(()=>{
        fetchDashboard();
    },[])


      const stats = [
    { title: "Blogs", value: dashboardData.blogs, icon: <FileText size={22} />, color: "bg-blue-500" },
    { title: "Comments", value: dashboardData.comments, icon: <MessageSquare size={22} />, color: "bg-green-500" },
    { title: "Drafts", value: dashboardData.draft, icon: <FilePlus size={22} />, color: "bg-purple-500" },
  ];

  return (
     <div className="h-screen  p-6 text-white">
      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-lg hover:scale-105 transition-all"
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold">{!stat.value ? 0:stat.value}</h3>
              <p className="text-gray-300">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Blogs */}
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
              {dashboardData.recentBlogs.map((blog,index)=>(
                <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1}></BlogTableItem>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
