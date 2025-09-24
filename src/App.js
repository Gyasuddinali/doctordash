
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import DashboardMainContent from './components/DashboardMainContent';
// import Photo from './photography/Photo';
import RootLayout from './tour/RootLayout';

import About from './tour/About';
import Contact from './tour/Contact';
import Footer from './tour/Footer'
import {BrowserRouter, Routes, Route } from "react-router-dom"; 
import NavBar from './tour/NavBar';
import {
  FaWhatsapp,
  FaPhone,FaShoppingCart
} from "react-icons/fa"
import FloatingButtons from './tour/FloatingButtons';
// import Hero from "./tour/Hero";
// import WhyChoose from "./tour/WhyChoose";
// import IdealFor from "./tour/IdealFor";
// import Attractions from "./tour/Attractions";
// import Highlights from "./tour/Highlights";
// import Booking from "./tour/Booking";
// import Welcome from './tour/Welcome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false,
    })
  })
  return (

 <div>
  <NavBar></NavBar>

  <Routes>
<Route path="/about" element={<About></About>} />
        <Route path="/" element={  <RootLayout></RootLayout>} />
        <Route path="/contact" element={<Contact />} />
    
  </Routes>
  
<Footer></Footer>
 <FloatingButtons />

   





  {/* <Profile></Profile>
  <Himalay></Himalay>
  <MountainRom></MountainRom>
  <AboutSection></AboutSection> */}
      {/* <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Header />
        <DashboardMainContent />
      </div> */}
    </div>

  );
}

export default App;
