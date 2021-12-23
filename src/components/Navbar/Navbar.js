import React from 'react';
import { NavLink as Link, NavMenu } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import { FaBars as Bars } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <Nav>
        <Link to="/">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6435b5110195189.5fe7f7e488ef3.png"
            alt="Icon Illustrator portrait" />
        </Link>
        <Bars />
        <NavMenu>
          <Link to="/" activeStyle>About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/work">Work</Link>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
