// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import About from './About';
import Calculator from './Calculator';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
