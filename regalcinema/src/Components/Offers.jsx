import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import col1 from '../assets/images/col6.webp';
import col2 from '../assets/images/col15.jpg';
import col3 from '../assets/images/col8.webp';
import col4 from '../assets/images/col11.jpg';

const Collections = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  return (
    <section
      id="collections"
      className="w-full px-6 py-16 lg:px-20 lg:py-24 bg-gray-100 flex flex-col items-center gap-12 relative top-32"
    >
      <h1 data-aos="fade-up" className="text-3xl font-light text-gray-600">
        Latest Deals & Offers
      </h1>
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-5xl font-bold text-gray-800"
      >
        Don't Miss Out!
      </h2>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Card 1 */}
        <div className="relative group overflow-hidden">
          <img
            src={col1}
            alt="Deal 1"
            className="w-full h-64 object-cover transition-transform transform hover:scale-105 duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-xl font-bold text-white">
              Buy ONE Get ONE Free!
            </h3>
            <p className="text-white mt-2">For DFCC Teen Debit Cards</p>
            <p className="text-gray-300 mt-1">Valid until 30th September</p>
            <button className="mt-4 py-2 px-6 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-200">
              Grab Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group overflow-hidden">
          <img
            src={col2}
            alt="Deal 2"
            className="w-full h-64 object-cover transition-transform transform hover:scale-105 duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-xl font-bold text-white">
              Exclusive Offers for Food & Beverages
            </h3>
            <p className="text-white mt-2">Valid until 30th September</p>
            <button className="mt-4 py-2 px-6 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-200">
              View More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group overflow-hidden">
          <img
            src={col3}
            alt="Deal 3"
            className="w-full h-64 object-cover transition-transform transform hover:scale-105 duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-xl font-bold text-white">
              20% Off on Sampath Cards
            </h3>
            <p className="text-white mt-2">
              Offer valid from 20th September to 7th August 2024
            </p>
            <button className="mt-4 py-2 px-6 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-200">
              Get Discount
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative group overflow-hidden">
          <img
            src={col4}
            alt="Deal 4"
            className="w-full h-64 object-cover transition-transform transform hover:scale-105 duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-xl font-bold text-white">
              Family 4 Pack - 15% Off
            </h3>
            <p className="text-white mt-2">For 4 tickets</p>
            <button className="mt-4 py-2 px-6 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-200">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
