import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Service from './pages/service/index';
import Footer from './components/footer';
import './App.css';

function App() {
  return (

<div className='container-m'>
   
<Router>
<Navbar />
   <Routes>
   <Route path="/" element={<Main />} />
   <Route path="/service" element={<Service />} />
   </Routes>
<Footer/>
   </Router>

   </div>

     
 
);
}

export default App;
