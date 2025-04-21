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
                    <button className="w-full md:w-auto mt-4">
                    <Link
                      to="/login"
                      className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
                    >
                      $GRACE Login
                    </Link></button>
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
