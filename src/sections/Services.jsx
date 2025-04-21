import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import the Locomotive Scroll styles
import { Helmet } from 'react-helmet-async';

export default function Services() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>DeFit | Services</title>
        <meta name="description" content="Discover DeFit's personalized fitness services including coaching and meal planning." />
      </Helmet>

      <div data-scroll-container>
        <section data-scroll-section>
          <h2 data-scroll data-scroll-speed="2">Services</h2>
          <ul style={{ listStyle: 'none', padding: 0, maxWidth: '400px', margin: '0 auto' }}>
            <li>
              <h4 data-scroll data-scroll-speed="2">🏋️‍♀️ One-on-one Coaching</h4>
            </li>
            <li>
              <h4 data-scroll data-scroll-speed="2">🥗 Custom Meal Plans</h4>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
