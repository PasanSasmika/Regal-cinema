import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { FaHome, FaFilm, FaInfoCircle, FaTags } from 'react-icons/fa';
import logo from "../assets/images/newlogo.png";
import { useNavigate } from 'react-router-dom';


function Header() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  }

  const navigate = useNavigate();
  const handleLogin = () =>{
    navigate(`/login`);
  };

  return (
    <nav className="w-full h-[72px] flex justify-between items-center px-10 bg-gradient-to-r from-[#2f1313] via-[#631313] to-[#a10707] animate-gradient shadow-lg sticky top-0 z-50">
      <div className="container mx-auto lg:px-3 w-full font-lato">
        <div className="lg:w-full w-11/12 mx-auto h-full flex lg:justify-between items-center gap-10">
          {/* Logo Area */}
          <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-[8rem] h-[8rem] relative top-1" />
          </div>
          {/* Menu Links */}
          <ul className="hidden lg:flex items-center xl:gap-20 gap-x-6 pl-4">
            <li className="flex items-center relative group">
              <FaHome className="text-white mr-2" />
              <a href="#home" className="font-lato font-semibold text-white text-lg transition-all duration-300 hover:text-yellow-400 hover:scale-105">Home</a>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
            </li>
            <li className="flex items-center relative group">
              <FaFilm className="text-white mr-2" />
              <a href="#movie" className="font-lato font-semibold text-white text-lg transition-all duration-300 hover:text-yellow-400 hover:scale-105">Movies</a>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
            </li>
            <li className="flex items-center relative group">
              <FaInfoCircle className="text-white mr-2" />
              <a href="#aboutus" className="font-Poppins font-semibold text-white text-lg transition-all duration-300 hover:text-yellow-400 hover:scale-105">About Us</a>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
            </li>
            <li className="flex items-center relative group">
              <FaTags className="text-white mr-2" />
              <a href="#offers" className="font-lato font-semibold text-white text-lg transition-all duration-300 hover:text-yellow-400 hover:scale-105">Offers</a>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
            </li>
          </ul>
         
          <div className="hidden lg:flex gap-4 items-center">
            {/* Login Icon */}
            <button className="rounded-full relative right-10 text-white w-10 h-10 flex items-center justify-center hover:bg-yellow-400 transition-all duration-300" onClick={handleLogin}>
              <BsPersonCircle size={28} />
            </button>
          </div>
          {/* Mobile Menu Icon */}
          {dropdown ? (
            <div className="lg:hidden text-3xl cursor-pointer text-white" onClick={showDropdown}>
              <MdClose />
            </div>
          ) : (
            <div className="lg:hidden text-3xl cursor-pointer text-white" onClick={showDropdown}>
              <HiMenuAlt3 />
            </div>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {dropdown && (
          <div className="lg:hidden w-full bg-gray-800 rounded-lg shadow-lg transition-all duration-300 mt-4">
            <ul className="flex flex-col items-start gap-2 py-4">
              <li className="flex items-center relative group">
                <FaHome className="text-white mr-2" />
                <a href="#home" className="px-6 py-2 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-400 hover:scale-105">Home</a>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
              </li>
              <li className="flex items-center relative group">
                <FaFilm className="text-white mr-2" />
                <a href="#movie" className="px-6 py-2 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-400 hover:scale-105">Movies</a>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
              </li>
              <li className="flex items-center relative group">
                <FaInfoCircle className="text-white mr-2" />
                <a href="#aboutus" className="px-6 py-2 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-400 hover:scale-105">About Us</a>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
              </li>
              <li className="flex items-center relative group">
                <FaTags className="text-white mr-2" />
                <a href="#offers" className="px-6 py-2 text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-400 hover:scale-105">Offers</a>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
