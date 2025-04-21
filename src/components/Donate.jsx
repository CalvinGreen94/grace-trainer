import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';

function DonateButton() {
  const { publicKey, sendTransaction } = useWallet();
  const connection = new Connection('https://mainnet.helius-rpc.com/?api-key=da3bfd20-ff75-49ed-923f-49ac837b7341');

  // Fetch the recent blockhash for the transaction
  const getRecentBlockhash = async () => {
    try {
      const { blockhash } = await connection.getLatestBlockhash();
      return blockhash;
    } catch (error) {
      console.error('Failed to fetch the recent blockhash:', error);
      throw new Error('Failed to fetch the recent blockhash');
    }
  };

  const handleDonate = async () => {
    if (!publicKey) {
      alert('Please connect your wallet.');
      return;
    }

    try {
      const blockhash = await getRecentBlockhash();

      const transaction = new Transaction({
        recentBlockhash: blockhash,
        feePayer: publicKey,
      }).add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey('CdZSahGBRo32uZubdkUh8yX2EoxD3xGn2xTs5G8artbu'), // Replace with your DAO's treasury address
          lamports: 1000000, // Amount in lamports (0.001 SOL)
        })
      );

      const signature = await sendTransaction(transaction, connection);
      
      await connection.confirmTransaction(signature, 'processed');

      alert('Donation successful!');
    } catch (error) {
      console.error('Transaction failed:', error);
      alert('Donation failed! Please try again later.');
    }
  };

  return <button onClick={handleDonate}>Donate 0.001 SOL</button>;
}

export default DonateButton;
