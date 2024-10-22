import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { MovieData } from '../constants';

function MoviesSlide() {
  return (
    <div className='flex items-center justify-center flex-col h-screen bg-gradient-to-r from-[#2f1313] via-[#811919] to-[#6a0606] animate-gradient'>
      <h2 
        data-aos="fade-up" 
        data-aos-delay="100" 
        className="text-5xl font-bold font-lato text-white mb-12 "
      >
        Now Showing
      </h2>
      <Swiper 
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className='max-w-[90%] lg:max-w-[80%]'
      >
        {MovieData.map((item) => (
          <SwiperSlide key={item.title}>
            <Link to={`/movie/${item.title}`}>
              <div 
                data-aos="zoom-in-down" 
                data-aos-delay="800" 
                className='relative group shadow-lg text-white rounded-xl overflow-hidden h-[400px] lg:h-[450px] w-[320px] lg:w-[360px] cursor-pointer transition-transform transform hover:scale-110 hover:rotate-1 duration-500'
              >
                <div
                  className='absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out'
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                <div className='absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-opacity duration-500' />

                <div className='relative flex flex-col p-6 gap-4 z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500'>
                  <item.icon className='text-white group-hover:text-blue-400 w-[40px] h-[40px] transition-colors duration-600 fade-in'/>
                  <h1 className='text-2xl lg:text-3xl font-bold text-white fade-in-up'>
                    {item.title}
                  </h1>
                </div>

                <RxArrowTopRight 
                  className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 transition-all duration-500' 
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper> 
    </div>
  );
}

export default MoviesSlide;
