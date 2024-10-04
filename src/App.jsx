import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Miscellaneous from './sections/Miscellaneous'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
        <Navbar/>
        <Hero />
        <About />
        <Projects />
        <Miscellaneous />
        <Contact />
        <div className='text-4xl flex px-4 justify-center items-center gap-3 text-white-800 flex-wrap pb-2'>
          <span>Made with</span>
          <span><img src="/assets/react.svg" alt="react" /></span>
          <span>,</span>
          <span><img className='w-8' src="/assets/3js.png" alt="threejs" /></span>
          <span>,</span>
          <span><img src="/assets/mixamo.png" className='w-[7rem]' alt="mixamo" /></span>

         </div>
        <Footer />
    </main>
  )
}

export default App