import EventCard from "./EventCard"
import banner from '../assets/evt.avif'

const events = [
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event'  },
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event' },
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event' },

   
    // Add more events here... 100 events or more if you want
  
]

const EventList = () => {
  return (
    <>
    <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4 ">Upcoming Events</h1>
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