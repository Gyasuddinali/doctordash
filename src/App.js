import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';

function App() {
  return (


 <div className="d-flex vh-100 bg-light">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Header />
        <DashboardMainContent />
      </div>
    </div>

  );
}

export default App;
