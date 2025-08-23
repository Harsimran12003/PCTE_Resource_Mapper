import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import './App.css';
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Floors from "./pages/Floors";
import Resources from "./pages/Resources";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/floors" element={<Floors />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/resources" element={<Resources />} />
          
        </Routes>
      </Router>
    
  );
}

export default App;
