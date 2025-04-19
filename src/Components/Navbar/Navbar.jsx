import React from 'react';
import { Link, NavLink } from 'react-router';
import './navbar.css'
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdBookmarkAdd } from "react-icons/md";
const Navbar = () => {
    const links = <>
     <NavLink to="/" className={  ({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Home </NavLink>
     <NavLink to="/about" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>About </NavLink>
     <NavLink to="/cart" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}> <MdOutlineShoppingCart size={20} /> </NavLink>
     <NavLink to="/favorite" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}><MdBookmarkAdd size={20}/> </NavLink>
    </>
    return (
        <div>
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    {/* For small device  */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <Link to="/">Mobile Galary</Link>
  </div>
  {/* <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div> */}
  <div className="navbar-end hidden lg:flex">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
   
  </div>
</div>
        </div>
    );
};

export default Navbar;