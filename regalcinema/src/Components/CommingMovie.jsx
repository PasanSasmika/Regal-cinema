import React from 'react'
import { FaYoutube } from "react-icons/fa";
import movie1 from "../assets/images/endwithus.jpg";
import movie2 from "../assets/images/vaazai.jpg";
import movie3 from "../assets/images/Bagman.jpg";
import movie4 from "../assets/images/wildrobot.avif";
import movie5 from "../assets/images/twozero.jpg";
import movie6 from "../assets/images/kanguwa.avif";
import movie7 from "../assets/images/transformers.jpg";
import movie8 from "../assets/images/sorria.jpg";
import {Slide, Fade} from "react-awesome-reveal";

const UpconningMovieData = [
    {
        id: 1,
        img: movie1,
        title:"It End With Us",
        desc:"In cinemas 2th october",
        icon: <FaYoutube/>
    },
    {
        id: 2,
        img: movie2,
        title:"Vaazhai",
        desc:"In cinemas 5th october",
        icon: <FaYoutube/>
    },
    {
        id: 3,
        img: movie3,
        title:"Bag Man",
        desc:"In cinemas 8th october",
        icon: <FaYoutube/>
    },
    {
        id: 4,
        img: movie4,
        title:"The wild robot",
        desc:"In cinemas 13th october",
        icon: <FaYoutube/>
    },
    {
        id: 5,
        img: movie5,
        title:"Two Zero One Four",
        desc:"In cinemas 19th october",
        icon: <FaYoutube/>
    },
    {
        id: 6,
        img: movie6,
        title:"Kanguva",
        desc:"In cinemas 3th october",
        icon: <FaYoutube/>
    },
    {
        id: 7,
        img: movie7,
        title:"Teansformers One",
        desc:"In cinemas 2th october",
        icon: <FaYoutube/>
    },
    {
        id: 8,
        img: movie8,
        title:"Sorria 2",
        desc:"In cinemas 15th october",
        icon: <FaYoutube/>
    },
   
    
];

function CommingMovie() {
  return (
    <section className=' min-h-screen bg-white place-items-center'>

    <div className='container mx-auto'>
    <h2 data-aos="fade-up" data-aos-delay="100" className="text-5xl font-bold font-lato  flex items-center justify-center text-gray-800 relative top-12">Comming Soon</h2>

        <div data-aos="fade-up" data-aos-delay="200" className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-6'>
            {UpconningMovieData.map(({ id,img,title,desc,icon }) => {
                return(
                    <div key={id} className='text-white shadow-md rounded-lg overflow-hidden top-32 relative group'> 
                       <img  src={img} alt=""className="w-[250px] h-[335px] rounded-lg  object-cover"/>
                        <div className='absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500'>
                            <div>
                                <Slide cascade>
                                <h1 className=' text-3xl font-bold flex justify-center items-center relative top-28'>{title}</h1>
                                <Fade cascade damping={0.05}>
                                    <h6 className=' flex justify-center items-center relative top-28'>{desc}</h6>
                                </Fade>
                                <div className="flex flex-col items-center relative top-32 group">
                                 <span className='flex justify-center items-center text-4xl
                                 hover:text-red-700 transition-all duration-300 group-hover:scale-110  ease-in-out cursor-pointer'>{icon}</span>
                                <span className='mt-2 text-[16px] group-hover:text-white transition-all duration-300'>Watch Trailer</span></div>
                                </Slide>
                                
                 </div>
                </div>
             </div>
                );
            })}

        </div>
    </div>

    </section>
  )
}

export default CommingMovie