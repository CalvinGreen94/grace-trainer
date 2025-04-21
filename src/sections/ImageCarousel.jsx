import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Helmet } from 'react-helmet-async';

export default function ImageCarousel() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction: 'vertical',
    });

    return () => scroll.destroy();
  }, []);

  return (
    <>
      <Helmet>
        <title>DeFit | Workout Gallery</title>
        <meta name="description" content="Browse a visual gallery of workouts and training sessions powered by DeFit." />
      </Helmet>

      <div data-scroll-container style={{ width: '100%', height: '50vh', overflow: 'hidden' }}>
        <section
          data-scroll-section
          style={{
            height: '100%',
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'nowrap', width: '100%' }}>
            <div data-scroll data-scroll-speed="2" style={{ minWidth: '300px', margin: '10px', flexShrink: 0 }}>
              <img
                src="https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg?semt=ais_hybrid&w=740"
                alt="Lifting weights"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </div>
            {[2, 3, 4, 5, 6].map((num) => (
              <div key={num} data-scroll data-scroll-speed="2" style={{ minWidth: '300px', margin: '10px', flexShrink: 0 }}>
                <img
                  src={`https://via.placeholder.com/300`}
                  alt={`Image ${num}`}
                  style={{ width: '100%', borderRadius: '10px' }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
