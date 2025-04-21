import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPassword = 'hope'; // Replace with env var or secure logic in production
    if (password === correctPassword) {
      navigate('/enter-workout');
    } else {
      alert('Incorrect password. Try again.');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Enter Password</h2>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition-colors p-3 rounded-lg font-medium"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
