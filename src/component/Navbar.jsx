import  { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { CiGlobe } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Navbar = ({ onCreateEventClick }) => {
  const [walletAddress, setWalletAddress] = useState(""); // Store user's wallet address
  const [error, setError] = useState(""); // Handle connection errors

  // Function to handle wallet connection
  const connectWallet = async () => {
    try {
      // Check if MetaMask (or another wallet) is installed
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []); // Request wallet connection
        const signer = provider.getSigner();
        const address = await signer.getAddress(); // Get user's wallet address
        setWalletAddress(address);
        setError(""); // Clear any existing errors
      } else {
        setError("MetaMask is not installed. Please install MetaMask to connect your wallet.");
      }
    } catch (err) {
      setError("Failed to connect wallet. Please try again.");
      console.error(err);
    }
  };

  useEffect(() => {
    // Retry mechanism to handle slow MetaMask injection
    const checkEthereumProvider = async () => {
      try {
        if (typeof window.ethereum !== 'undefined') {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } else {
          setError("MetaMask is not installed. Please install MetaMask to connect your wallet.");
        }
      } catch (error) {
        console.error("Error checking for MetaMask: ", error);
        setError("Failed to detect MetaMask.");
      }
    };

    // Retry check every 1 second for 5 seconds if MetaMask is not immediately available
    const retryCheckInterval = setInterval(checkEthereumProvider, 1000);
    const retryTimeout = setTimeout(() => clearInterval(retryCheckInterval), 5000); // Stop after 5 seconds

    checkEthereumProvider(); // Initial check

    // Clean up interval and timeout when the component unmounts
    return () => {
      clearInterval(retryCheckInterval);
      clearTimeout(retryTimeout);
    };
  }, []);

  return (
    <div className='w-full flex items-center justify-between px-4 mt-4'>
      <div className="flex items-center">
        <h1 className="text-bold text-[30px] font-bold">
          Ventura.
        </h1>
        <div className="h-10 w-10 rounded-full bg-red">
            .
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        {/* Display Wallet Address if connected */}
        {walletAddress ? (
          <div className="p-4 bg-black text-white rounded-md flex items-center justify-center">
            {walletAddress.substring(0, 6)}...{walletAddress.slice(-4)} {/* Shortened Wallet Address */}
          </div>
        ) : (
          <div 
            className="p-4 bg-black text-white rounded-md flex items-center justify-center gap-2 cursor-pointer"
            onClick={connectWallet}
          >
            <CiGlobe className="text-xl" />
            Connect Wallet
          </div>
        )}

        {/* Create Event Button */}
        <div 
          className="p-4 bg-black text-white rounded-md flex items-center justify-center gap-2 cursor-pointer"
          onClick={onCreateEventClick}
        >
          <FaPlus className="text-xl" />
          Create Event
        </div>
      </div>

      {/* Display error if any */}
      {error && (
        <div className="text-red-500 mt-2">
          {error}
        </div>
      )}
    </div>
  );
};

export default Navbar;
