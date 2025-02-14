import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <>   
    <nav className="p-3 bg-success">
      <Link to={'/register'} className="p-2 text-white ">Register</Link>
      <Link to={'/login'} className="p-2 text-white  ">Login</Link>
      <Link to={'/showdata'}  className="p-2 text-white  ">Show Data</Link>
    </nav>
    </>

  )
}

export default Navbar
