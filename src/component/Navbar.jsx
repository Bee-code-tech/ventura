import { FaPlus } from "react-icons/fa";
import { ConnectButton } from '@rainbow-me/rainbowkit';

// eslint-disable-next-line react/prop-types
const Navbar = ({ onCreateEventClick }) => {

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
       <ConnectButton  />

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
