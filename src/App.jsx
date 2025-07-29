
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="navbar-spacer" />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
