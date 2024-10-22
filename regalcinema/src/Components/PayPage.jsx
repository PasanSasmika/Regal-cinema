import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function PayPage() {

  const navigation = useNavigate();
  const handleNav = () => {
    navigation(`/goahed`);
  }

  const location = useLocation();
  const { totalPrice, seats, title, time, foodItems, seatprice } = location.state || {};

  return (
    <div class="font-[sans-serif] bg-gradient-to-r from-[#2f1313] via-[#631313] to-[#a10707] animate-gradient lg:flex lg:items-center lg:justify-center lg:h-screen max-lg:py-4">
      <div class="bg-gray-300 p-8 w-full max-w-5xl max-lg:max-w-xl mx-auto rounded-md">
        <h2 class="text-3xl font-extrabold text-gray-800 text-center">Checkout</h2>

        <div class="grid lg:grid-cols-3 gap-6 max-lg:gap-8 mt-16">
          <div class="lg:col-span-2">
            <h3 class="text-lg font-bold text-gray-800">Choose your payment method</h3>

            <div class="grid gap-4 sm:grid-cols-2 mt-4">
              <div class="flex items-center">
                <input type="radio" class="w-5 h-5 cursor-pointer" id="card" checked />
                <label for="card" class="ml-4 flex gap-2 cursor-pointer">
                  <img src="https://readymadeui.com/images/visa.webp" class="w-12" alt="card1" />
                  <img src="https://readymadeui.com/images/american-express.webp" class="w-12" alt="card2" />
                  <img src="https://readymadeui.com/images/master.webp" class="w-12" alt="card3" />
                </label>
              </div>

              <div class="flex items-center">
                <input type="radio" class="w-5 h-5 cursor-pointer" id="paypal" />
                <label for="paypal" class="ml-4 flex gap-2 cursor-pointer">
                  <img src="https://readymadeui.com/images/paypal.webp" class="w-20" alt="paypalCard" />
                </label>
              </div>
            </div>

            <form class="mt-8">
              <div class="grid sm:col-span-2 sm:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="Name of card holder"
                    class="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                </div>
                <div>
                  <input type="number" placeholder="Postal code"
                    class="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                </div>
                <div>
                  <input type="number" placeholder="Card number"
                    class="col-span-full px-4 py-3.5 bg-white text-gray-800 w-full 
                    text-sm border rounded-md focus:border-[#007bff] outline-none" />
                </div>
                <div>
                  <input type="number" placeholder="EXP."
                    class="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                </div>
                <div>
                  <input type="number" placeholder="CVV"
                    class="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                </div>
              </div>

              <div class="flex flex-wrap gap-4 mt-8">
                <button type="button"
                  class="px-7 py-3.5 text-sm tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700">Pay</button>
              </div>
            </form>
          </div>

          <div class="bg-white p-6 rounded-md max-lg:-order-1">
            <h3 class="text-lg font-bold text-gray-800">Receipt</h3>
            <ul className="text-gray-800 mt-6 space-y-3">
              <li className="flex flex-wrap gap-4 text-sm">Movie name <span className="ml-auto font-bold">{title}</span></li>
              <li className="flex flex-wrap gap-4 text-sm">Show time <span className="ml-auto font-bold">{time}</span></li>
              <li className="flex flex-wrap gap-4 text-sm">
                Seat number <span className="ml-auto font-bold">{Array.isArray(seats) ? seats.join(', ') : seats}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">Seat price <span className="ml-auto font-bold">Rs. {seatprice}</span></li>
              <hr />

              <h2 className="flex flex-wrap gap-4 text-sm">Your Food Items:</h2>
              {foodItems.map((food, index) => (
                <li key={index} className="flex flex-wrap gap-4 text-sm bg-white p-4 rounded-lg shadow-md mb-2">
                  <span>{food.productName} x {food.quantity}</span>
                  <span className="ml-auto font-bold">Price: Rs. {food.price}</span>
                </li>
              ))}

              <li className="flex relative top-4 flex-wrap gap-4 text-base font-bold">Total <span className="ml-auto">Rs. {totalPrice}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayPage;
