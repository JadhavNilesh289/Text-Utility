import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Team from './Components/Team';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';


function App() {


  return (
    <>
      <div>
        <Router>
          <header>
            <Navbar title="TextUtility" />
            
            <Routes>
              {/* exact path used for Home Page to avoid conflict */}
              <Route exact path="/" element={< Home />} />
              <Route exact path="/team" element={<Team />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/about" element={<About />} />
            </Routes>

          </header>
        </Router>
      </div>
    </>
  );
}

export default App;
