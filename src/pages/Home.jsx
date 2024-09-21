import EventList from "../component/EventList"
import Navbar from "../component/Navbar"
import banner from '../assets/evt.avif'
import { useState } from "react"
import EventModal from "../component/EventModal"

const event = [
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event'  },
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event' },
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event' },
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event' }, 
]

const Home = () => {
      const [events, setEvents] = useState(event); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);

  // Function to add a new event to the list
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };
  return (
    <div
    className="container mx-auto h-screen "
    >
    <Navbar onCreateEventClick={openModal} />
    <EventList events={events} />
     <EventModal isOpen={isModalOpen} onClose={closeModal} addEvent={addEvent} />
    </div>
  )
}

export default Home