// EventCard.js

import { FaCalendar, FaRegIdBadge, FaTrash } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const EventCard = ({ title, image, price }) => {
  return (
    <div className="w-[360px] rounded-lg overflow-hidden  bg-white p-4 border border-neutral-200 ">
      {/* Image on Top */}
      <div className="w-full  aspect-square rounded-lg overflow-hidden  ">
        <img className=" object-cover " src={image} alt={title} />
      </div>
      
      {/* Event Details */}
      <div className="p-1">
        {/* Event Title */}
        <h2 className="text-[28px] font-semibold text-gray-800 mt-2 ">{title}</h2>

        {/* Date Information */}
        <div className="text-neutral-300 flex items-center justify-start gap-2  p-0 -mt-4">
            <FaCalendar className="h-16" />
          <span className="font-lg text-[20px]">January 20, 2024</span> 
        </div>
        <div className=" text-sm flex items-center justify-start gap-2 -mt-4">
            <FaMoneyBill className="text-lg text-neutral-300" />
          <span className="font-lg text-xl text-black">${price}</span> 
        </div>

       <div className="flex items-baseline justify-center w-full gap-3">
         <div className="flex w-full rounded-lg bg-neutral-800 p-3 items-center justify-center text-white gap-2 mt-3">
            <FaRegIdBadge className="text-white text-lg" />
            Register
        </div>
        <div className="flex items-center justify-center bg-red-600 h-full p-4 rounded-lg text-white">
            <FaTrash className="h-full" />
        </div>
       </div>
       

       
      </div>
    </div>
  );
};

export default EventCard;
