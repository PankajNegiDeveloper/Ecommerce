import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav id="navbar">
      <div id='navlogo'><h1>ProjectX</h1></div>
           <div id="navitems">
           <ul>
            <NavLink to={"/adminportal/"}><li>Home</li></NavLink>
            <NavLink to={"/adminportal/about"}><li>About</li></NavLink>
            <NavLink to={"/adminportal/products"}><li>Products</li></NavLink>
            <NavLink to={"/adminportal/cart"}><li>Cart</li></NavLink>
            <NavLink to={"/"}><li>Log out</li></NavLink>
            </ul>
           </div>
      </nav>
    </>
  )
}

export default Nav
