
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
function App() {
  return (


 <div>
  {/* <RootLayout></RootLayout> */}
  <Profile></Profile>
  <Himalay></Himalay>
  <MountainRom></MountainRom>
  <AboutSection></AboutSection>
      {/* <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Header />
        <DashboardMainContent />
      </div> */}
    </div>

  );
}

export default App;
