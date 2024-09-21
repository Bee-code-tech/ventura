// EventCard.js

import { FaCalendar } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const EventCard = ({ title, image, price }) => {
  return (
    <div className="w-[400px] rounded-lg overflow-hidden  bg-white p-4 border border-neutral-200 ">
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
        <div className=" text-sm flex items-center justify-start gap-2 -mt-6">
            <FaMoneyBill className="h-16 text-neutral-300" />
          <span className="font-lg text-xl text-blue-500">${price}</span> 
        </div>
       

       
      </div>
    </div>
  );
};

export default EventCard;
