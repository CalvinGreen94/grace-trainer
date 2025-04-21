import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import DonateButton from './Donate'
const WalletConnectButton = () => {
  const { connected, publicKey, disconnect } = useWallet();

  console.log('Wallet connected?', connected);
  console.log('Public Key:', publicKey?.toBase58());

  return (
    <div className="wallet-connect" style={{ margin: '20px' }}>
      {!connected ? (
        <WalletMultiButton />
      ) : (
        <div>
          <p>Wallet connected: {publicKey?.toBase58()}</p>
          <button onClick={() => disconnect()}>Disconnect Wallet</button>
          <DonateButton/>


        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;
