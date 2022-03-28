import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-xl text-rose-700">
      <div className="links">
        <Link to="/">The blog Site</Link>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
