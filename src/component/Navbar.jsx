import { useAddress, useMetamask, useDisconnect } from '@thirdweb-dev/react';
import { CiGlobe } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Navbar = ({ onCreateEventClick }) => {
  const address = useAddress(); // Hook to get the connected wallet address
  const connectWithMetamask = useMetamask(); // Hook to connect with MetaMask
  const disconnectWallet = useDisconnect(); // Hook to disconnect the wallet

  return (
    <div className='w-full flex items-center justify-between px-4 mt-4'>
      <div className="flex items-center">
        <h1 className="text-bold text-[30px] font-bold">
          Ventura.
        </h1>
        <div className="h-10 w-10 rounded-full bg-red">.</div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        {/* If wallet is connected, show the address */}
        {address ? (
          <div 
            className="p-4 bg-black text-white rounded-md flex items-center justify-center gap-2 cursor-pointer"
            onClick={disconnectWallet} // Clicking will disconnect the wallet
          >
            {address.substring(0, 6)}...{address.slice(-4)} {/* Shortened Wallet Address */}
            <span className="text-red-500 ml-2">(Disconnect)</span>
          </div>
        ) : (
          <div 
            className="p-4 bg-black text-white rounded-md flex items-center justify-center gap-2 cursor-pointer"
            onClick={connectWithMetamask} // Clicking will connect the wallet
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
    </div>
  );
};

export default Navbar;
