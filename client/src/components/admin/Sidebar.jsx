import React from 'react'
import { NavLink } from "react-router-dom";
import { LayoutDashboard, PlusCircle, List, MessageSquare } from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
    { name: "Add Blogs", path: "/admin/addBlog", icon: <PlusCircle size={20} /> },
    { name: "Blog Lists", path: "/admin/listBlog", icon: <List size={20} /> },
    { name: "Comments", path: "/admin/comments", icon: <MessageSquare size={20} /> },
  ];

  return (
    <div className="w-24 md:w-64 h-screen  text-gray-100 flex flex-col shadow-lg ">
      <div className="p-5 text-2xl font-bold border-b border-gray-700">
        Blog Admin
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all  ${
                    isActive ? "bg-gray-700 text-white font-semibold" : ""
                  }`
                }
              >
                {item.icon}
                <span className='hidden md:inline'>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar
