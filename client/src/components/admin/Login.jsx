import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';

const Login = () => {
    
    const{axios, setToken} = useContext(AppContext);
    const[email,setEmail] = useState('')
    const[password, setPassword] = useState('')


    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
          const {data} = await axios.post('/api/admin/login', {email, password})
          if(data.success){
            setToken(data.token)
            localStorage.setItem('token',data.token)
            axios.defaults.headers.common['Authorization'] = data.token;
          }else{
            toast.error(data.message)
          }
        } catch (error) {
          toast.error(error.message)
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-700">
        {/* Logo / Heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Blog <span className="text-blue-400">Login</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>
            <input
             onChange={(e)=>setEmail(e.target.value)}
             value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login
