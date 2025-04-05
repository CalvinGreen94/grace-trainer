import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import the Locomotive Scroll styles

export default function ImageCarousel() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      // Optional: Add more settings here if needed
      direction: 'vertical', // Enable horizontal scrolling
    });

    return () => {
      // Cleanup on component unmount
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <section data-scroll-section style={{ height: '100%', display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}>
        {/* Horizontal Scrolling Container */}
        <div style={{ display: 'flex', flexWrap: 'nowrap', width: '100%' }}>
          {/* Grid of Images */}
          <div data-scroll data-scroll-speed="2" style={{ minWidth: '300px', margin: '10px', flexShrink: 0 }}>
            <img src="https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg?semt=ais_hybrid&w=740" alt="Image 1" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <div data-scroll data-scroll-speed="2" style={{ minWidth: '300px', margin: '10px', flexShrink: 0 }}>
            <img src="https://via.placeholder.com/300" alt="Image 2" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <div data-scroll data-scroll-speed="2" style={{ minWidth: '300px', margin: '10px', flexShrink: 0 }}>
            <img src="https://via.placeholder.com/300" alt="Image 3" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <div data-scroll data-scroll-speed="2" style={{ minWidth: '300px', margin: '10px', flexShrink: 0 }}>
            <img src="https://via.placeholder.com/300" alt="Image 4" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <div data-scroll data-scroll-speed="2" style={{ minWidth: '300px', margin: '10px', flexShrink: 0 }}>
            <img src="https://via.placeholder.com/300" alt="Image 5" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <div data-scroll data-scroll-speed="2" style={{ minWidth: '300px', margin: '10px', flexShrink: 0 }}>
            <img src="https://via.placeholder.com/300" alt="Image 6" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
