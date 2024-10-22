import React, { useState } from 'react';
import { MdOutlineChair, MdArrowForward } from 'react-icons/md';
import { CgHomeScreen } from "react-icons/cg";
import { MovieData } from '../constants';
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function SeatBooking({ seatNumber, isSelected, onClick }) {
  return (
    <MdOutlineChair
      className={`text-3xl -rotate-90 cursor-pointer relative bottom-16 transition-transform duration-300 ease-in-out hover:scale-110 
      ${isSelected ? 'text-indigo-600' : 'text-gray-700  hover:text-indigo-500'}`}
      onClick={onClick}
    />
  );
}

const MovieSeatLayout = () => {
  const totalSeat = 82;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const { title } = useParams();
  const location = useLocation();
  const { time } = location.state || {};
  const movie = MovieData.find((movie) => movie.title === title);

  const navigate  = useNavigate();
  const handleClick = () => {
    navigate(`/shop-page/`, {
      state: {
        totalPrice: selectedSeats.length * 2450, 
        selectSeat: selectedSeats,
        title,
        time   
      }
    });
  };
 
  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      if (selectedSeats.length < 10) {
        setSelectedSeats([...selectedSeats, seatNumber]);
      } else {
        alert("You can only select a maximum of 10 seats.");
      }
    }
  };

  const renderSeats = () => {
    let seats = [];
    for (let i = 1; i <= totalSeat; i++) {
      seats.push(
        <SeatBooking
          key={i}
          seatNumber={i}
          isSelected={selectedSeats.includes(i)}
          onClick={() => handleSeatClick(i)}
        />
      );
    }
    return seats;
  };

  return (
    <div className='min-h-screen bg-gradient-to-r from-purple-100 to-red-200 p-12'>
      <h2 className='text-5xl font-bold text-red-700 text-center mb-10 relative right-[490px] bottom-5'>
        Choose Your Seat
      </h2>
      <div className='flex justify-center gap-6 mb-8 relative bottom-24 left-[440px]'>
        <span className='text-2xl font-bold text-gray-700'>{title}</span>
        <div className='border border-black -rotate-180 '/>
        <span className='text-2xl font-bold text-gray-700'>{time}</span>
      </div>

      <div className='flex justify-between items-start space-x-10'>
        {/* Seat Layout */}
        <div className='flex-1 flex justify-center'>
          <div className='flex gap-6'>
            <div className='w-16 relative  bottom-14 h-full border-r-2 border-dashed border-gray-900 flex justify-center items-center'>
              <CgHomeScreen className='text-5xl text-yellow-500' />
            </div>
            <div className='grid grid-cols-8 gap-4'>
              {renderSeats()}
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className='space-y-6'>
          <div className='flex items-center gap-x-2'>
            <MdOutlineChair className='text-3xl text-gray-700 -rotate-90' />
            <p className='text-sm text-gray-600'>Available</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <MdOutlineChair className='text-3xl text-red-600 -rotate-90' />
            <p className='text-sm text-white bg-red-600 rounded px-2'>Booked</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <MdOutlineChair className='text-3xl text-indigo-600 -rotate-90' />
            <p className='text-sm text-white bg-indigo-600 rounded px-2'>Selected</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <RiMoneyDollarCircleFill className='text-3xl text-gray-600' />
            <p className='text-sm text-gray-600'>Rs 2450</p>
          </div>
        </div>

        {/* Selected Seats & Price */}
        {selectedSeats.length > 0 && (
          <div className='bg-white shadow-lg rounded-lg p-6 w-[430px] relative'>
            <h3 className='text-2xl font-semibold text-gray-800'>Selected Seats:</h3>
            <div className='flex flex-wrap mt-4'>
              {selectedSeats.map((seat) => (
                <div
                  key={seat}
                  className='w-10 h-10 rounded-md m-2 text-lg font-medium bg-red-600 text-white flex items-center justify-center border border-white shadow-md'>
                  {seat}
                </div>
              ))}
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mt-6'>Total Price</h3>
            <p className='text-3xl font-bold text-indigo-600'>
              Rs. {selectedSeats.length * 2450}
            </p>
            <span className='text-sm text-gray-500'>(Includes all taxes)</span>

          <button onClick={handleClick} className="flex items-center justify-center gap-2 relative top-3 bg-red-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-red-900 transition duration-300 ease-in-out" >
             Continue <MdArrowForward className="text-2xl" /></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSeatLayout;
   