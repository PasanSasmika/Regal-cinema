import React from 'react'
import { FaVideo } from 'react-icons/fa';
import { MdOutlineTheaters } from 'react-icons/md';
import { FaConciergeBell } from 'react-icons/fa';
import { motion } from "framer-motion";
import {delay} from "framer-motion";
import { SlideLeft } from '../utility/animation';
import 'aos/dist/aos.css'
import aw1 from '../assets/images/eco1.png'
import aw2 from '../assets/images/quality1.png'
import aw3 from '../assets/images/exp1.png'






const AboutData = [
 {
    id:1,
    title:"Expert Projectionists",
    desc: "Our expert projectionists ensure every film is shown with the highest quality sound and picture, providing an immersive experience that feels real.",
    icon: <FaVideo/>,
    delay: 0.3,
},

{
    id:2,
    title:"State-of-the-Art Facilities",
    desc: "Equipped with cutting-edge technology, our theaters offer comfortable seating, stunning visuals, and a sound system that brings every scene to life. ",
    icon: <MdOutlineTheaters/>,
    delay: 0.6,
},

{
    id:3,
    title:"Customer-Centered Services",
    desc: "From personalized ticket booking to our premium snack bar, we go above and beyond to cater to your needs, making each visit seamless and enjoyable. ",
    icon: <FaConciergeBell/>,
    delay: 0.9,
},


]


function AboutUs() {
  return (
    <section className=' min-h-screen relative top-60'>
        <div>
            <div className='container py-24'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-poppins'> 
                    <div data-aos="zoom-in" delay="100" className='space-y-4 p-6 '>
                        <h1 className='text-3xl md:text-4xl font-bold text-green'>Behind the Scenes</h1>
                        <p className='text-gray-500'>At Regal Cinema, we're more than just a movie theater — we're a place where magic comes to life. Our commitment to delivering exceptional experiences is rooted in passion, innovation, and attention to detail. From the moment you walk in, you're part of an unforgettable journey, whether you're watching the latest blockbuster or enjoying a classic hit.
                        Discover more about our team, values, and dedication to creating the ultimate movie experience.</p>
                    </div>
                    {AboutData.map((item)=> {
                        return (
                            <motion.div 
                            variants={SlideLeft(item.delay)}
                            initial="hidden"
                            whileInView="visible"
                            key={item.id}
                            className=' bg-gray-100 space-y-6 p-6  hover:bg-green hover:text-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] '>
                                <div className='text-3xl'>{item.icon}</div>
                                <p className='text-2xl font-semibold'>{item.title}</p>
                                <p className=' hover:text-white  '>{item.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div data-aos="zoom-in" delay="100" className='bg-gray-100 h-36 flex items-center justify-center space-x-9 relative bottom-12 '>
  <img src={aw1} alt="Cinema Experience" className='max-w-full max-h-36' />
  <img src={aw2} alt="Cinema Experience" className='max-w-full max-h-36' />
  <img src={aw3} alt="Cinema Experience" className='max-w-full max-h-36' />
</div>
        </section>
)
}

export default AboutUs