import EventList from "../component/EventList"
import banner from '../assets/evt.avif'

const events = [
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event'  },
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event' },
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event' },
    { id: 1, image: banner, description: "Event 1 Description", price: 100, title:'Demo Event' },
  

   
  
]

const Events = () => {
  return (
    <div className="container mx-auto">
        <EventList events={events} />
    </div>
  )
}

export default Events