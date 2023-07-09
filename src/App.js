import './style/header.css'
import React from "react";
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router,Route ,Routes } from "react-router-dom";
function App() {
  return (
  <>
  <Router>
    <Header></Header>
    <Routes>
 
 
    <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
    
    </Routes>
  </Router>
  
  
  
  </>
  );
}

export default App;
