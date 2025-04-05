import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';  // Import the Locomotive Scroll styles

export default function About() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      // Optional: Add more settings here if needed
    });

    return () => {
      // Cleanup on component unmount
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container>
      <section data-scroll-section>
        <h2 data-scroll data-scroll-speed="2">About Grace</h2>
        <h2 data-scroll data-scroll-speed="2"> <p style={{ maxWidth: '600px', margin: '0 auto' }} data-scroll data-scroll-speed="1">
          Certified personal trainer helping clients reach their fitness goals.
        </p></h2>
      </section>
    </div>
  );
}
