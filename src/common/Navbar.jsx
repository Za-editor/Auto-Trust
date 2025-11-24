// import React from 'react'
// import { Link } from 'react-router';

// const Navbar = () => {
//   return (
//     <div className="flex flex-col items-center py-[22px] bg-[#F4F6F8]">
//       <Link to={"/"} className='cursor-pointer'>
//         <img src="/assets/Logo.png" alt="" />
//       </Link>

//       <p className="text-[16px] text-[#727272] mt-4">
//         Transparent Car Maintenance Platform
//       </p>
//     </div>
//   );
// }

// export default Navbar

// Navbar.jsx
import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";

export default function Navbar({ onToggleSidebar }) {
  return (
    <header className="w-full bg-white py-[19px] flex items-center justify-between shadow-sm px-4">
      {/* Left: hamburger + logo */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="text-2xl text-[#1A73E8]"
        >
          <svg width="32" height="33" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="#1A73E8"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <img src="/assets/Logo2.png" alt="Logo" className="h-10" />
      </div>

      {/* Center search */}
      <div className="flex-1 max-w-2xl mx-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search mechanics..."
            className="w-full h-10 rounded-full bg-gray-100 px-6 text-sm placeholder-gray-500 focus:outline-none"
          />
          <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Right login */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-[#1E73D8] text-white px-4 py-2 rounded-[10px] shadow-sm">
          <FiUser />
          <span className="text-sm">Login / Sign up</span>
        </button>
      </div>
    </header>
  );
}
