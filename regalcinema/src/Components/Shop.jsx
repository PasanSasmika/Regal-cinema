import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FOODS } from '../constants/foods';

function Shop() {
  const [cartItems, setCartItems] = useState({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0,
  });

  const addtoCart = (id) => {
    setCartItems(cartItems => ({ ...cartItems, [id]: cartItems[id] + 1 }));
  };

  const subFromCart = (id) => {
    setCartItems(cartItems => ({ ...cartItems, [id]: cartItems[id] - 1 }));
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems => ({ ...cartItems, [id]: 0 }));
  };

  const totalAmount = () => {
    let amount = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        let productInfo = FOODS.find(products => products.id === Number(key));
        amount += Math.floor(cartItems[key] * productInfo.price);
      }
    }
    return amount;
  };

  const location = useLocation();
  const { totalPrice, selectSeat, title, time } = location.state || {};


  const navigate = useNavigate();
  const handlePay = () => {
    navigate('/paypage', {
      state: {
        totalPrice: totalPrice + totalAmount(),
        seats: selectSeat,
        title: title,
        seatprice: totalPrice,
        time: time,
        foodItems: Object.keys(cartItems)
          .filter((key) => cartItems[key] > 0)
          .map((key) => {
            const productInfo = FOODS.find((product) => product.id === Number(key));
            return {
              productName: productInfo.productName,
              quantity: cartItems[key],
              price: productInfo.price,
            };
          }),
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-800 my-8 relative top-4 right-[494px]">{title} | {time}</h1>

        {/* Food items list */}
        <div className="flex flex-col gap-4 w-full px-4">
          {FOODS.map(products => (
            <div key={products.id} className="flex items-center justify-between w-[650px] relative top-8 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
              <div className="flex items-center">
                <img className="w-16 h-16 object-cover rounded-lg" src={products.image} alt={products.productName} />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{products.productName}</h3>
                  <p className="text-md text-gray-600">Rs. {products.price}</p>
                </div>
              </div>
              <button 
                onClick={() => addtoCart(products.id)} 
                className="bg-red-600 text-white py-1 px-4 rounded-lg hover:bg-red-800 transition duration-300 ease-in-out">
                Add to Cart
              </button>
            </div>
          ))}

          {/* Cart */}
          <div className="fixed p-4  right-0 top-0 bg-gradient-to-r from-[#fbfbfb] via-[#770e0e58] to-[#a10707] animate-gradient text-white h-full w-[790px] shadow-xl rounded-l-lg overflow-y-auto">
  <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
 
  {FOODS.map(products => {
    if (cartItems[products.id] > 0) {
      return (
        <div key={products.id} className="flex justify-between items-center w-96 top-12 relative bg-white text-black p-2 mb-2 rounded-lg shadow-md">
          <div className="flex items-center">
            <img className="w-12 h-12 object-cover rounded-lg" src={products.image} alt={products.productName} />
            <div className="ml-4">
              <p className="font-bold">{products.productName}</p>
              <p className="text-md">Rs. {products.price}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={() => subFromCart(products.id)} className="text-xl text-blue-700">-</button>
            <span className="text-lg font-bold">{cartItems[products.id]}</span>
            <button onClick={() => addtoCart(products.id)} className="text-xl text-blue-700">+</button>
            <button onClick={() => removeFromCart(products.id)} className='text-black bg-red-600 p-2 rounded'>Remove</button>
          </div>
        </div>
      );
    }
    return null;
  })}
</div>
        </div>
      </div>
      {/* Booked Seat, total seat price name, time box */}
       <div className="fixed top-16 h-[900px] right-3 m-1 bg-white rounded-lg shadow-lg p-6 w-80">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="text-md text-gray-600 mb-4">{time}</p>
        <h2 className="text-lg font-semibold mb-2">Your Seats:</h2>
        <div className="flex flex-wrap gap-2">
          {selectSeat && selectSeat.length > 0 ? (
            selectSeat.map((seat, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-md m-1 text-lg font-medium bg-red-600 text-white flex items-center justify-center border border-white shadow-md transform transition duration-200 hover:scale-105"
              >
                {seat}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No seats selected.</p>
          )}
        </div>
        <p>
        <h2 className="text-lg font-bold  mt-6">Your Foods:</h2>
         {Object.keys(cartItems).map((key) => {
         if (cartItems[key] > 0) {
        const productInfo = FOODS.find((product) => product.id === Number(key));
        return (
        <span className='font-semibold' key={key}>
          {productInfo.productName} ({cartItems[key]})<br />
        </span>
      );
      }
       return null;
       })}
       </p>

        {totalPrice ? (
         <div className="mt-4 border-t pt-4">
         <h3 className="text-xl font-semibold text-gray-800 mb-4">Seat Price</h3>
         <p className="text-3xl font-bold text-indigo-600 mb-4">Rs. {totalPrice}</p> {/* Added margin-bottom */}
        
         <p className="text-xl font-semibold text-gray-800 mt-6 mb-2">Food Price</p> {/* Added margin-bottom */}
         <p className="text-3xl font-bold text-indigo-600 mb-4">Rs. {totalAmount()}</p> {/* Added margin-bottom */}
          
          
         <h1 className="text-xl font-extrabold text-gray-800 mb-4">Total Price</h1>
         <h1 className="text-3xl font-bold text-red-600 mb-2">{totalPrice + totalAmount()}</h1> {/* Added margin-bottom */}
         
         <span className="text-sm text-gray-500">(Includes all taxes)</span>
         <button onClick={handlePay} className="flex items-center justify-center gap-2 relative top-3 bg-red-700 text-white text-lg font-semibold py-3 px-6
          rounded-lg shadow-lg hover:bg-red-900 transition duration-300 ease-in-out">Pay Now</button>
       </div>
        ) : (
          <p className="text-gray-500 mt-4">No price available.</p>
        )}
      </div> 
    </div>
  );
}

export default Shop;
