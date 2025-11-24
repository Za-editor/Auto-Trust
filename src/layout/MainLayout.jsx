import { Outlet } from "react-router";

import React from 'react'
import Navbar from "../common/Navbar";

const MainLayout = () => {
  return (
      <div className="container mx-auto">
          <Navbar/>
      <Outlet/>
      </div>
  )
}

export default MainLayout