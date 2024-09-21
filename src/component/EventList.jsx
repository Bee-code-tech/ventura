import EventCard from "./EventCard"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"



// eslint-disable-next-line react/prop-types
const EventList = ({events}) => {
  return (
    <>
    <div className="flex items-center justify-between mt-8 mb-4">
    <h1 className="text-2xl font-md text-gray-800 text-center mb-4 ">Upcoming Events</h1>
   <div className="flex  justify-center gap-2 items-baseline">
    <Link to='/events' className="text-2xl font-md text-gray-800 text-center mb-4 ">see all</Link>
    <IoIosArrowForward className="" />
    </div>    
    </div>
    <div className="grid grid-cols-4 gap-4">
        {
            // Event List Data
            // eslint-disable-next-line react/prop-types
            events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))
        }
    </div>
    </>
  )
}

export default EventList