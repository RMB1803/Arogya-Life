import { useState } from 'react'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import LocomotiveScroll from 'locomotive-scroll';
import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <NavBar />
      <Landing />
      <About />
      <Featured />
    </div>
  )
}

export default App
