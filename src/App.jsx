import React, {useState} from 'react';
import Sidebar from './Sidebar';
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home';
import Commercial from './sub-pages/Commercial';
import Gadgets from './sub-pages/Gadgets';
import Support from './sub-pages/Support';
import Packages from './pages/Packages';
import Reason from './sub-pages/Reason';
import Blog from './sub-pages/Blog';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmartHome from './sub-pages/SmartHome';

function App() {  
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Router>
        <Sidebar setSidebar={setSidebar} sidebar={sidebar}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-smart-home-packages" element={<Packages />} />
          <Route path="/services/smart-home" element={<SmartHome/>} />
          <Route path="/services/sales-of-home-gadgets" element={<Gadgets />} />
          <Route path="/services/commercial solutions" element={<Commercial />} />
          <Route path="/services/maintainance-and-support" element={<Support />} />
          <Route path="/why-choose-us" element={<Reason />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
