import React from 'react'

const Footer = () => {
  return (
    <footer className=" relative w-full bg-gradient-to-tr from-white/60 to-white/5 backdrop-blur-lg border-t border-white/20 shadow-lg">
  <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
    
    {/* <!-- Logo / Blog Name --> */}
    <div className="text-white text-2xl font-bold">
        <img src='logo.png' className='h-20' alt="" />
      AiBlog<span className="text-blue-400">.</span>
    </div>
    
    {/* <!-- Navigation Links --> */}
    <div className="flex flex-wrap justify-center gap-6 text-white/80">
      <a href="#" className="hover:text-blue-400 transition">Home</a>
      <a href="#" className="hover:text-blue-400 transition">About</a>
      <a href="#" className="hover:text-blue-400 transition">Blog</a>
      <a href="#" className="hover:text-blue-400 transition">Contact</a>
    </div>
    
    {/* <!-- Social Icons --> */}
    <div className="flex gap-4">
      <a href="#" className="text-white/80 hover:text-blue-400 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.56v14.91c0 .81-.66 1.47-1.47 1.47H1.47C.66 21 0 20.34 0 19.47V4.56C0 3.75.66 3.09 1.47 3.09h21.06C23.34 3.09 24 3.75 24 4.56zM7.2 19.5h3.3v-8.7H7.2v8.7zM8.85 9c1.08 0 1.8-.72 1.8-1.62-.02-.93-.72-1.62-1.77-1.62-1.05 0-1.8.69-1.8 1.62 0 .9.72 1.62 1.74 1.62h.03zM20.4 19.5h-3.3v-4.74c0-1.14-.42-1.92-1.47-1.92-.81 0-1.29.54-1.5 1.05-.06.15-.09.36-.09.57v5.04h-3.3s.06-8.19 0-8.7h3.3v1.23c.45-.69 1.23-1.68 2.97-1.68 2.16 0 3.79 1.41 3.79 4.44v4.71z"/>
        </svg>
      </a>
      <a href="#" className="text-white/80 hover:text-blue-400 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.56c-.89.39-1.84.65-2.84.77 1.02-.61 1.8-1.57 2.17-2.72-.96.57-2.02.98-3.14 1.2-.91-.97-2.21-1.57-3.63-1.57-2.75 0-4.98 2.23-4.98 4.98 0 .39.04.77.13 1.13-4.14-.21-7.81-2.19-10.27-5.19-.43.74-.68 1.6-.68 2.52 0 1.74.89 3.27 2.23 4.17-.83-.02-1.6-.25-2.27-.63v.06c0 2.43 1.73 4.46 4.02 4.92-.42.12-.87.18-1.33.18-.32 0-.64-.03-.95-.09.64 2 2.49 3.45 4.68 3.49-1.72 1.35-3.88 2.15-6.23 2.15-.4 0-.8-.02-1.19-.07 2.22 1.43 4.86 2.26 7.7 2.26 9.24 0 14.3-7.65 14.3-14.3 0-.22-.01-.44-.02-.65.98-.71 1.82-1.59 2.49-2.6z"/>
        </svg>
      </a>
    </div>
  </div>
  
  {/* <!-- Bottom Text --> */}
  <div className="border-t border-white/10 mt-4 py-4 text-center text-white/70 text-sm">
    © 2025 AiBlog. All rights reserved.
  </div>
</footer>

  )
}

export default Footer
