import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './Login';
import FarmerList from './pages/FarmerList';
import HarvesterList from './pages/HarvesterList';
import PlantationList from './pages/PlantationList';
import Plantation from './pages/Plantation';
import Workspace from './component/Workspace';
import FarmerRegistration from './pages/FarmerRegistration';
import Demo from './pages/Demo';

function App() {
  return (
    <>
     <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/farmerlist" element={<FarmerList />} />
      <Route path="/harvesterlist" element={<HarvesterList />} />
      <Route path="/plantation" element={<Plantation />} />
      <Route path="/plantationlist" element={<PlantationList />} />
      <Route path="/farmerregistration" element={<FarmerRegistration />} />
      <Route path="/demo" element={<Demo />} />
      </Routes>
     </Router>
     </>
  );
}

export default App;
