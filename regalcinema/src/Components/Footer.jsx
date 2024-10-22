import React, { useState } from 'react'
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import paylogo from "../assets/images/w.png";
import logo from "../assets/images/newlogo.png";




function Footer() {
  const [isopen, SetIsopen] = useState(false);
  return (
    <footer className="bg-green-900 h-[400px] text-black py-4 bg-gradient-to-r from-[#2f1313] via-[#631313] to-[#a10707] animate-gradient relative top-60 ">
    <div className="container mx-auto px-4  flex flex-wrap justify-between">
      {/* Left Section */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <div className="mb-4 relative bottom-5">
          <img src={logo} alt="Logo" className="w-40 h-40 relative bottom-7" />
        </div>
        
        <p className="text-sm text-white mb-4 text-justify w-[347px] gap-4 relative bottom-24">
        Welcome to Regal Cinema, where your movie experience comes to life. Our website offers a sleek, responsive design for easy browsing, ticket booking, and exploring our film selection. Enjoy a seamless and enjoyable experience on any device with Regal Cinema.


        </p>
        <div className="mb-4 border-2 border-white w-52 p-2 pr-2 relative bottom-20 ">
          <p className="font-semibold text-white">HOTLINE: 077 345 6789</p>
        </div>
        <div className="flex space-x-4 mb-4 relative bottom-16">
          {/* Social Media Icons */}
          <a href="#">
            <FaFacebook className="w-6 h-6 text-white hover:text-gray-400" />
          </a>
          <a href="#">
            <FaYoutube className="w-6 h-6 text-white hover:text-gray-400" />
          </a>
          <a href="#">
            <FaInstagram className="w-6 h-6 text-white hover:text-gray-400" />
          </a>
        </div>
        {/* Payment Methods */}
        <div className="flex space-x-4 relative bottom-14">
        <img src={paylogo} alt="PayHere" className="w-64" />
          
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/4 flex flex-wrap justify-between">
          <div className="w-1/3 pl-14">
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                Movies

                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                Deals & Offers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                Login
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/3 relative right-96 ">
            <h3 className="font-semibold mb-4 text-white">Customer Support</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                Refund Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                Troubleshooting
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                 Our Vison
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Our Misson
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Awordeds
                </a>
              </li>
            
            </ul>

            <div className="relative left-80 bottom-44 bg-gradient-to-r from-[#2f1313] via-[#631313] to-[#9f3535] animate-gradient p-8 rounded-lg shadow-lg max-w-md">
  <div className="mb-6">
    <h1 className="text-4xl font-sans font-extrabold text-white mb-4">Share Your Experience!</h1>
    <p className="text-lg text-gray-300">
      We’d love to hear your thoughts. Let us know how your experience was.
    </p>
  </div>
  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={()=>SetIsopen(true)}>
    Write a Review
  </button>
  {
    isopen && (
      <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-white p-8 rounded-lg shadow-xl max-w-lg w-full'>
        <h2 className="text-2xl font-bold mb-6 text-center">Share Your Feedback</h2>
        
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <label htmlFor="email" className='mb-2 font-semibold text-gray-700'>Your Email</label>
            <input 
              type="email" 
              className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 duration-200' 
              placeholder="Enter your email" 
            />
          </div>
          
          <div className='flex flex-col'>
            <label htmlFor="movie-name" className='mb-2 font-semibold text-gray-700'>Movie Name</label>
            <input 
              type="text" 
              className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 duration-200' 
              placeholder="Enter the movie name"
            />
          </div>
          
          <div className='flex flex-col'>
            <label htmlFor="feedback" className='mb-2 font-semibold text-gray-700'>Feedback</label>
            <textarea 
              className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 duration-200' 
              placeholder="Write your feedback here" 
              rows="4"
            ></textarea>
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <button 
              className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out'
              onClick={() => SetIsopen(false)}>
              Submit
            </button>
            
            <button 
              className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out'
              onClick={() => SetIsopen(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    
    )
  }
 
</div>
          </div>
      </div>
      
    </div>
   
  </footer>
  );
};

export default Footer;