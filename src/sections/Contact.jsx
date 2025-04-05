import { InlineWidget } from 'react-calendly';

export default function Contact() {
  return (
    <section data-scroll-section>
      <h2>Book a Session</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <InlineWidget url='https://calendly.com/lafrancdai/30min' />
      </div>
    </section>
  )
}
