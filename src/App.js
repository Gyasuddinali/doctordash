
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';
import Photo from './photography/Photo';
import RootLayout from './tour/RootLayout';
import AboutSection from "./tour/AboutSection";
import MountainRom from "./tour/MountainRom";
import Profile from "./tour/Profile";
import Natural from "./tour/Natural";
import Himalay from './tour/Himalay'
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
function App() {
  return (

 <div className="app-container">
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
