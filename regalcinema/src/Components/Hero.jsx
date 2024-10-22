import React, { useState } from 'react'
import HomeImage from '../assets/images/kingdom-planet-apes.avif';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaCube,FaUtensils, FaCouch, FaVolumeUp} from 'react-icons/fa';
import { RiFullscreenLine } from 'react-icons/ri';
import { TbWind } from 'react-icons/tb';




const responsives = {
  superLargeDesktop: {
    breakpoint: {max: 4000 , min: 3000},
    items: 5,
  },
  desktop: {
    breakpoint: {max: 3080 , min: 1024}, 
    items: 5,
  },
  tablet: {
    breakpoint: {max: 1024 , min: 464},
    items: 3,
  },  
  module: {
    breakpoint: {max: 464 , min: 0},
    items: 1,
  },
};

const type= [
  { title: "3D Experience", des: "Immerse yourself in breathtaking 3D visual experiences.", icon: <FaCube /> },
  { title: "IMAX Screen", des: "You can Experience movies on a giant IMAX screen.", icon: <RiFullscreenLine /> },
  { title: "Dolby Atmos Sound",des: "Feel every sound with Dolby Atmos technology.", icon: <FaVolumeUp /> },
  { title: "Luxury Seating", des: "Relax in plush, comfortable luxury seating.", icon: <FaCouch /> },
  { title: "4DX Effects",des: "Enhance your viewing with 4DX sensory effects.", icon: <TbWind /> },
  { title: "Foods", des: "Enjoy the delicious snacks and beverages available.", icon: <FaUtensils /> },



]


function Hero() {

const [currentSlide, setCurrentSlide] = useState(0);

  return (
   <div>
    <section className='relative font-lato lg:h-[100vh]' data-aos="fade-down" data-aos-delay="300">
    <img src={HomeImage} alt="" className='absolute w-full h-full bottom-20 object-cover' />
    <div className='absolute w-full h-full bottom-20 bg-gradient-to-r from-[#000000fd] via-[#3c0a0a54] to-[#2b0000ea] animate-gradient' />
    <div className='flex flex-col justify-center items-center relative z-10 lg:h-full h-screen max-w-[1320px] px-6 lg:pt-0 pt-16 mx-auto'>
        <span className='lg:text-5xl text-3xl text-white text-center font-bold relative'>Discover the magic of movies
            <div className='bg-orange text-white text-lg -left-8 px-8 py-1 w-fit absolute -top-8 z-10 -rotate-[10deg]'>
                Lets Explore
            </div>
        </span>
        <p className='text-white text-center font-lato text-2xl my-8'>your perfect showtime awaits!</p>

        <img src="" alt="" className='lg:block hidden my-4 -ml-96' />
        <p className='text-white font-semibold lg:text-3xl lg:py-0 py-8'>Or Browse the Select Type</p>
    </div>
</section>

<section className='bg-[#F3F8F6]'>
    <div className='relative z-10 max-w-[1320px] px-6 mx-auto bottom-24 -mt-24'>
        <Carousel responsive={responsives} infinite autoPlay={true} itemClass='px-2'>
            {type.map((item, index) => (
                <div key={index} className='group'>
                    <div className={`cursor-pointer p-8 rounded-lg flex flex-col justify-center items-start gap-4 ${currentSlide % type.length === index ? 'bg-green text-white' : 'bg-white text-green group-hover:bg-green group-hover:text-white'}`}>
                        <p className={`font-bold text-lg ${currentSlide % type.length === index ? "text-white" : "text-green group-hover:text-white"}`}>{item.title}</p>
                        <span className={`text-7xl ${currentSlide % type.length === index ? "text-white" : "text-green group-hover:text-white"}`}>{item.icon}</span>
                        <p className={`${currentSlide % type.length === index ? "text-white" : "text-green group-hover:text-white"}`}>{item.des}</p>
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
</section>
   </div>
  )
}

export default Hero