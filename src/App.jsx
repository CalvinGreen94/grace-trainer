import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'
import ImageCarousel from './sections/ImageCarousel';

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    })
    return () => scroll.destroy()
  }, [])

  return (
    <>
          <Hero />

          <ImageCarousel/>

      <About />
      <Services />
      <Contact />
    </>
  )
}

export default App
