import  { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa6';

// eslint-disable-next-line react/prop-types
const EventModal = ({ isOpen, onClose, addEvent }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [startTime, setStartTime] = useState('');
  const [description, setDescription] = useState('');
  const [endTime, setEndTime] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create the new event object
    const newEvent = {
      id: Date.now(), // Unique id
      title,
      image,
      description,
      startTime,
      endTime,
      price,
    };

    // Add the event to the list
    addEvent(newEvent);

    // Close the modal
    onClose();

    // Clear the form
    setTitle('');
    setImage('');
    setStartTime('');
    setDescription('')
    setEndTime('');
    setPrice('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg w-[450px]">
        <h2 className="text-2xl font-bold mb-4">Create New Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-1">Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="w-full border rounded px-2 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Image URL</label>
            <input 
              type="text" 
              value={image} 
              onChange={(e) => setImage(e.target.value)} 
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Short Description</label>
            <input 
              type="text" 
              value={description} 
              onChange={(e) => setImage(e.target.value)} 
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Start Time</label>
            <input 
              type="text" 
              value={startTime} 
              onChange={(e) => setStartTime(e.target.value)} 
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">End Time</label>
            <input 
              type="text" 
              value={endTime} 
              onChange={(e) => setEndTime(e.target.value)} 
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Price</label>
            <input 
              type="number" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div className="flex justify-between mt-8">
           
             <div 
             onClick={onClose}
             className="flex justify-center items-center  bg-red-600 rounded text-white px-3 gap-2">
            <FaTrash />

                <button type="submit" className=" text-white  py-2 rounded">
              Cancel
            </button>
            </div>


            <div className="flex justify-center items-center  bg-black rounded text-white px-3 gap-2">
            <FaBuilding />

                <button type="submit" className="bg-black text-white  py-2 rounded">
              Create Event
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
