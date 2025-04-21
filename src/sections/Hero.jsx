import { Helmet } from 'react-helmet-async';

function Hero() {
  return (
    <>
      <Helmet>
        <title>DeFit | Train with Grace</title>
        <meta
          name="description"
          content="Start your fitness journey with Grace — Certified personal trainer offering tailored coaching."
        />
      </Helmet>

      <section style={{ background: 'linear-gradient(to right, #f472b6, #f87171)', color: 'white' }} data-scroll-section>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Train with Grace</h1>
        <p style={{ fontSize: '1.25rem' }}>Personal Fitness Coaching Tailored to You</p>
      </section>
    </>
  );
}

export default Hero;
