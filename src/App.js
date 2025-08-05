
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

import {BrowserRouter, Routes, Route } from "react-router-dom"; 
import NavBar from './tour/NavBar';
function App() {
  return (

 <div>
  <BrowserRouter>
  <NavBar></NavBar>
  <Routes>
<Route path="/about" element={<About></About>} />
        <Route path="/" element={  <RootLayout></RootLayout>} />
        <Route path="/contact" element={<Contact />} />
    
  </Routes>
  </BrowserRouter>
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
