import { useState } from 'react';



import './App.css'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './pages/Services';
import AllSevices from './components/AllSevices';
import Works from './components/Works';
import Reviews from "./components/Reviews";

function App() {


  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <AllSevices />
      <Works />
      <Reviews/>
    </>
  );
}

export default App
