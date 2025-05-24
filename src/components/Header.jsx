import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png';

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-5">
        <nav className="flex items-center text-black py-4">
          <div>
            <Link to="/">
              <img className="w-24 h-8 object-contain" src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="flex gap-10 ml-auto text-lg font-semibold">
            <li>
              <Link to="/" className="hover:text-red-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500">About</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-red-500">Services</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-red-500">Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;




