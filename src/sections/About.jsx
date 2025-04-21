import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Helmet } from 'react-helmet-async';

export default function About() {
  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    if (!scrollContainer) return;

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>DeFit | Home</title>
        <meta name="description" content="Explore DeFit: a Web3 fitness platform on Solana powered by $GRACE" />
      </Helmet>

      <div data-scroll-container>
        <section data-scroll-section>
          <h2 data-scroll data-scroll-speed="2">About Grace</h2>
          <p
            style={{ maxWidth: '600px', margin: '0 auto' }}
            data-scroll
            data-scroll-speed="1"
          >
            Certified personal trainer helping clients reach their fitness goals.
          </p>
        </section>
      </div>
    </>
  );
}
