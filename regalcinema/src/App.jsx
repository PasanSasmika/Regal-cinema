import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './Components/Header';
import MoviesSlide from './Components/MoviesSlide';
import CommingMovie from './Components/CommingMovie';
import Offers from './Components/Offers';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import MovieDetail from './Components/MovieDetail';
import BuyTickets from './Components/BuyTickets';
import SeatBooking from './Components/SeatBooking';
import Shop from './Components/Shop';
import Loginpage from './Components/Loginpage';
import SignUpPage from './Components/Signup';
import PayPage from './Components/PayPage';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Page Components */}
        <Route path="/" element={
          <>
            <Hero />
            <MoviesSlide />
            <CommingMovie />
            <Offers />
            <AboutUs />
            <Footer />
            
           

          </>
        } />
        
        {/* Movie Detail Route */}
        <Route path="/movie/:title" element={<MovieDetail />} />
        <Route path="/buytickets/:title" element={<BuyTickets/>} />
        <Route path="/seatbooking/:title" element={<SeatBooking />} />
        <Route path="/shop-page" element={<Shop/>} />
        <Route path="/login" element={<Loginpage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/paypage" element={<PayPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
