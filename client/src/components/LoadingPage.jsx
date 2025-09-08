import React from "react";
import Navbar from "./Navbar";

const LoadingPage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="h-screen w-full flex items-center justify-center bg-cover bg-center relative">

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Loading Content */}
      <div className="glass relative z-10 flex flex-col items-center justify-center text-white p-6 rounded-2xl shadow-xl">
        
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        
        {/* Loading Text */}
        <h1 className="text-3xl font-bold mt-6 animate-pulse">Loading Blog...</h1>
        <p className="text-gray-300 mt-2">Please wait while we prepare something amazing for you</p>
      </div>
    </div>
  </>);
};

export default LoadingPage;
