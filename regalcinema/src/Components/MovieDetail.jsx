import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { MovieData } from '../constants';
import { FaYoutube } from "react-icons/fa";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";




function MovieDetail() {
    const { title } = useParams();
    const movie = MovieData.find((movie) => movie.title === title);
    const navigate = useNavigate();

    const handleBuyTickets = () => {
      navigate(`/buytickets/${movie.title}`,{ state: { image: movie.backgroundImage, time:movie.time, } },); // navigate to BuyTickets page with movie title
  };
  return (
    <section 
    className="relative top-[-1] bg-cover bg-center min-h-[100vh]" 
    style={{ backgroundImage: `url(${movie.backgroundImage})` }}
>
    <div className="absolute inset-0 bg-gradient-to-r from-[#000000fd] via-[#3c0a0a54] to-[#2b0000ea] animate-gradient"></div>
    <div className="relative container mx-auto p-6 min-h-screen flex items-center text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pl-44 pt-32">
            <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]">
                  <span className='text-[18px] font-bold'>Now Showing</span>
                <h1 className="text-5xl lg:text-7xl font-bold">
                    {movie.title}
                </h1>
                
                <div className='flex items-center gap-2'>
                <p className="text-lg text-gray-300 max-w-2xl">
                    {movie.watchH}
                </p>
                <span className='pl-4'>IMDB ratings</span>
                <span className='text-yellow-400'><FaStar/></span>
                <p> {movie.Rating}</p>
                </div>
                
                <div className="flex gap-4">
                    
                <div className='flex items-center gap-10'>
                  <div className='group relative'>
                   <span className='flex justify-center items-center text-5xl hover:text-yellow-400 transition-all duration-300
                    group-hover:scale-110 ease-in-out cursor-pointer'><FaYoutube /></span>
                  <span className='mt-2 text-[16px] flex group-hover:text-white transition-all duration-300'> Watch Trailer</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
               </div>
                 <div className='group relative'>
                   <span className='flex justify-center items-center text-5xl hover:text-yellow-400 transition-all duration-300 group-hover:scale-110 ease-in-out cursor-pointer'
                   onClick={handleBuyTickets}>
                  <BsTicketPerforatedFill /></span>
                  <span className='mt-2 text-[16px] flex group-hover:text-white transition-all duration-300'>Buy Tickets</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span></div>
                 </div>
                        
                </div>
                
            </div>
        </div>
    </div>
</section>

  )
}

export default MovieDetail