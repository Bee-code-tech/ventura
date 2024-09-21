import EventCard from "./EventCard"
import banner from '../assets/evt.avif'
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"

const events = [
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event'  },
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event' },
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event' },
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event' },

   
    // Add more events here... 100 events or more if you want
  
]

const EventList = () => {
  return (
    <>
    <div className="flex items-center justify-between mt-8 mb-4">
    <h1 className="text-2xl font-md text-gray-800 text-center mb-4 ">Upcoming Events</h1>
   <div className="flex  justify-center gap-2 items-baseline">
    <Link to='/events' className="text-2xl font-md text-gray-800 text-center mb-4 ">see all</Link>
    <IoIosArrowForward className="" />
    </div>    
    </div>
    <div className="flex w-full gap-8 overflow-x-auto">
        {
            // Event List Data
            events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))
        }
    </div>
    </>
  )
}

export default EventList