import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

// Wallet + UI Components
import WalletConnectButton from './components/connectWallet';
import LoginPage from './components/LoginPage';
import EnterWorkoutPage from './components/EnterWorkoutPage';

// Page Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';
import ImageCarousel from './sections/ImageCarousel';

// Solana Wallet Adapter Setup
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

const wallets = [new SolflareWalletAdapter()];

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });
    return () => scroll.destroy();
  }, []);

  return (
    <Router> {/* Router should wrap the Wallet and Connection Providers */}
      <ConnectionProvider endpoint="https://api.mainnet-beta.solana.com">
        <WalletProvider
          wallets={wallets}
          autoConnect
          onError={(err) => console.error('Wallet error', err)}
        >
          <WalletModalProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <div data-scroll-container>
                    <WalletConnectButton />
                    <Link
                    to="/login"
                    className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
                  >
                    $GRACE Login
                  </Link>
                    <Hero />

                    <ImageCarousel />
                    <About />
                    <Services />
                    <Contact />
                    {/* Link styled as a button */}
           
                  </div>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/enter-workout" element={<EnterWorkoutPage />} />
            </Routes>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </Router>
  );
}

export default App;
