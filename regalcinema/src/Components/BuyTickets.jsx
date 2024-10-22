import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MovieData } from '../constants';
import { ImCalendar } from "react-icons/im";
import { FcNext } from "react-icons/fc";
import icn from "../assets/images/td.png";
import icn2 from "../assets/images/dolby.png";
import icn3 from "../assets/images/imx.png";




function BuyTickets() {
  const { title } = useParams();
  const location = useLocation();
  const { image, time } = location.state || {};
  const movie = MovieData.find((movie) => movie.title === title);
  const navigate = useNavigate();

  const handleSeatBooking = () => {
    if (movie) {
      navigate(`/seatbooking/${movie.title}`, { 
        state: { 
          image: movie.backgroundImage, 
          time: movie.time 
        } 
      });
    }
  };

  const today = new Date();
  const calenderDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });



 

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#fbfbfb] via-[#770e0e58] to-[#a10707] animate-gradient flex items-center justify-between px-12 py-6">
      
      <div className="flex flex-col space-y-6 w-1/2 relative bottom-20">
        <h1 className="text-5xl font-bold text-gray-800">{title}</h1>

      
        <hr className="border-gray-500 border-t-2 w-full" />
        <div className='flex gap-4'>
        <ImCalendar className='text-[24px]'/>
        <select className='text-xl text-gray-600' id="date" name="date">
            <option value="day1">{calenderDate}</option>
            <option value="day2">Tuesday, October 1, 2024</option>
            <option value="day3">Wed, October 2, 2024</option>
            <option value="day4">Thu, October 3, 2024</option>
            <option value="day5">Fri, October 4, 2024</option>
            <option value="day6">Sat, October 5, 2024</option>
            <option value="day7">Sun, October 6, 2024</option>
            <option value="day8">Mon, October 7, 2024</option>
            <option value="day9">Tue, October 8, 2024</option>
            <option value="day10">Wed, October 9, 2024</option>
        </select>
       
        </div>
       
      
        <hr className="border-gray-500 border-t-2 w-full" />
        
        <h2 className="text-2xl text-gray-600">{time}</h2>

        <hr className="border-gray-500 border-t-2 w-full" />

        <div className='flex gap-12'>
        <img className='w-20 h-20' src={icn} alt="" />
        <img className='w-32 h-32 relative bottom-5' src={icn2} alt="" />
        <img className='w-32 h-32 relative bottom-5' src={icn3} alt="" />
        </div>

        <div className="flex gap-3 items-center px-4 py-2 text-red-800 relative cursor-pointer group ml-auto">
 
  <button  onClick={handleSeatBooking} className="flex items-center justify-center gap-2 relative top-3 bg-red-700 text-white text-lg font-semibold py-3 px-6
          rounded-lg shadow-lg hover:bg-red-900 transition duration-300 ease-in-out">Continue</button>
</div>
</div>

      {image && (<div className="w-1/2 flex justify-end">
          <img className="w-[460px] h-[560px] object-cover rounded-xl shadow-lg" src={image} alt={`${title} background`}/>
          </div>
      )}

    </section>
  );
}

export default BuyTickets;
