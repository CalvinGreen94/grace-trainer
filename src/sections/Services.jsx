import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';  // Import the Locomotive Scroll styles
export default function Services() {
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
        <h2 data-scroll data-scroll-speed="2">Services</h2>
        <ul style={{ listStyle: 'none', padding: 0, maxWidth: '400px', margin: '0 auto' }}>
          <li>
            <h4 data-scroll data-scroll-speed="2">🏋️‍♀️ One-on-one Coaching</h4>
          </li>
          <li>Protein: </li>
          <li>
            <h4 data-scroll data-scroll-speed="2">🥗 Custom Meal Plans</h4>
          </li>
        </ul>
      </section>

    </div>
  );
}
