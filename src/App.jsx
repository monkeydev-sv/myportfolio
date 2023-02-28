import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
<>
<div className="app">
<Router>
<Navbar />
   <Routes>
   <Route path="/" element={<Main />} />
   </Routes>
<Footer/>
   </Router>

   </div>
</>   
     
 
);
}

export default App;
