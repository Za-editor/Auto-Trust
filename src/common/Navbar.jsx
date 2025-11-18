import React from 'react'
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="flex flex-col items-center py-[22px] bg-[#F4F6F8]">
      <Link to={"/"} className='cursor-pointer'>
        <img src="/assets/Logo.png" alt="" />
      </Link>

      <p className="text-[16px] text-[#727272] mt-4">
        Transparent Car Maintenance Platform
      </p>
    </div>
  );
}

export default Navbar