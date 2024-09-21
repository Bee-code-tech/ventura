import EventList from "../component/EventList"
import Navbar from "../component/Navbar"

const Home = () => {
  return (
    <div
    className="container mx-auto h-screen "
    >
    <Navbar />
    <EventList />
    </div>
  )
}

export default Home