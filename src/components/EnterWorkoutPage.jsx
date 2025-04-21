import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const EnterWorkoutPage = () => {
  const { connected, publicKey, disconnect } = useWallet();
  const [workoutType, setWorkoutType] = useState('');
  const [duration, setDuration] = useState('');
  const [status, setStatus] = useState('');

  console.log('Wallet connected?', connected);
  console.log('Public Key:', publicKey?.toBase58());

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!publicKey) {
      setStatus('Please connect your wallet first.');
      return;
    }

    const payload = {
      workout_type: workoutType,
      duration,
      wallet: publicKey.toString(),
    };

    try {
      const response = await fetch(' https://9b31-2600-4040-16df-2100-71f3-5eb0-f9ff-d857.ngrok-free.app/workout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('✅ Workout submitted successfully!');
        setWorkoutType('');
        setDuration('');
      } else {
        setStatus(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error('Error submitting workout:', error);
      setStatus('❌ Failed to submit workout.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white min-h-screen">
      {/* Wallet Connection Section */}
      <div className="wallet-connect mb-8" style={{ margin: '20px' }}>
        {!connected ? (
          <WalletMultiButton />
        ) : (
          <div>
            <p>Wallet connected: {publicKey?.toBase58()}</p>
            <button onClick={() => disconnect()} className="bg-red-600 text-white p-2 rounded mt-2">
              Disconnect Wallet
            </button>
          </div>
        )}
      </div>

      {/* Workout Submission Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Log Your Workout</h2>

        <input
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg mb-4"
          type="text"
          placeholder="Workout Type (e.g., Bench Press)"
          value={workoutType}
          onChange={(e) => setWorkoutType(e.target.value)}
          required
        />

        <input
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg mb-4"
          type="text"
          placeholder="Duration (e.g., 30 min)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 transition-colors p-3 rounded-lg font-medium"
        >
          Submit Workout
        </button>

        {status && (
          <p className="mt-4 text-center text-sm text-gray-300">{status}</p>
        )}
      </form>
    </div>
  );
};

export default EnterWorkoutPage;
