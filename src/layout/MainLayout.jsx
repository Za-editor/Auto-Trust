import { Outlet } from "react-router";

import React from 'react'
import Navbar from "../common/Navbar";

const MainLayout = () => {
  return (
      <>
          <Navbar/>
      <Outlet/>
      </>
  )
}

export default MainLayout