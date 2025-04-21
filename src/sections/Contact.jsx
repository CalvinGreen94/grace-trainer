import { InlineWidget } from 'react-calendly';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>DeFit | Book a Session</title>
        <meta
          name="description"
          content="Schedule a personal training session with Grace through Calendly."
        />
      </Helmet>

      <section data-scroll-section>
        <h2>Book a Session</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <InlineWidget url='https://calendly.com/lafrancdai/30min' />
        </div>
      </section>
    </>
  );
}
