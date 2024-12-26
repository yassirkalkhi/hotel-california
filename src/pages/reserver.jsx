import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Header from "../components/Header"
import Footer from "../components/Footer"


import { rooms } from "../data/mockData"

const Reserver = () => {
  
  const [searchParams, setSearchParams] = useState({
    roomType: "Any",
    checkIn: new Date(),
    checkOut: new Date(new Date().setDate(new Date().getDate() + 3)),
    guests: "2 Adults",
    price: "Any"
  });

  // Add filtered rooms state
  const [filteredRooms, setFilteredRooms] = useState(rooms);

  // Add custom styles for the DatePicker portal
  const [calendarContainer, setCalendarContainer] = useState(null);

  useEffect(() => {
    setCalendarContainer(document.getElementById('calendar-portal'));
  }, []);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle search/filter
  const handleSearch = () => {
    const filtered = rooms.filter(room => {
      // Filter by room type
      const matchType = searchParams.roomType === "Any" || 
                       room.type.toLowerCase() === searchParams.roomType.toLowerCase();
      
      // Filter by occupancy
      const matchOccupancy = room.occupancy.includes(searchParams.guests);
      
      // Filter by availability (assuming we have dates logic)
      const isAvailable = room.availability;

      return matchType && matchOccupancy && isAvailable;
    });
    
    setFilteredRooms(filtered);
  };

  return (
    <>
      {/* Add a portal container for the calendar */}
      <div id="calendar-portal" className="relative z-[100]" />
      
      <div className="min-h-screen bg-cover bg-center bg-fixed relative overflow-x-hidden"
        style={{
          backgroundImage: 'url("./bg.jpg")',
        }}
      >
        <div className="relative z-50">
          <Header />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10" />

        {/* Content Container */}
        <div className="relative z-10 min-h-screen">
          {/* Hero Section */}
          <div className="h-[40vh] flex flex-col items-center justify-center text-white">
            <h1 className="text-9xl mb-4 font-semibold font-StyleScript">Hotel Escape</h1>
            <p className="text-4xl font-light font-StyleScript">Your Perfect Stay Awaits</p>
          </div>

          {/* Main Content */}
          <div className="w-full px-8 pb-12">
            <div className="max-w-8xl mx-auto">
              {/* Search Section */}
              <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-lg mb-12 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-white text-sm mb-2">Room Type</label>
                    <select 
                      value={searchParams.roomType}
                      onChange={(e) => handleInputChange('roomType', e.target.value)}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-md text-white"
                    >
                      <option className="bg-gray-900">Any</option>
                      <option className="bg-gray-900">vip</option>
                      <option className="bg-gray-900">Twin</option>
                      <option className="bg-gray-900">Suite</option>
                    </select>
                  </div>
                  <div className="relative">
                    <label className="block text-white text-sm mb-2">Check-in</label>
                    <DatePicker
                      selected={searchParams.checkIn}
                      onChange={date => handleInputChange('checkIn', date)}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-md text-white"
                      portalId="calendar-portal"
                      popperClassName="z-[100]"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-white text-sm mb-2">Check-out</label>
                    <DatePicker
                      selected={searchParams.checkOut}
                      onChange={date => handleInputChange('checkOut', date)}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-md text-white"
                      portalId="calendar-portal"
                      popperClassName="z-[100]"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Guests</label>
                    <select 
                      value={searchParams.guests}
                      onChange={(e) => handleInputChange('guests', e.target.value)}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-md text-white"
                    >
                            <option className="bg-gray-900 selection:bg-gray-900">1 Adults</option>
                            <option className="bg-gray-900">2 Adults</option>
                            <option className="bg-gray-900">3 Adults</option>
                            <option className="bg-gray-900">4 Adults</option>
                    </select>
                  </div>
                </div>
                
                {/* Add Search Button */}
                <div className="mt-6 flex justify-center">
                  <button 
                    onClick={handleSearch}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors"
                  >
                    Search Hotels
                  </button>
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRooms.map((room, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
                    <img 
                      src={room.image} 
                      alt={room.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{room.name}</h3>
                          <p className="text-gray-400">{room.size} • {room.occupancy}</p>
                        </div>
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full">
                          {room.rating}
                        </div>
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        {room.features.map((feature, i) => (
                          <span key={i} className="text-sm text-gray-300">• {feature}</span>
                        ))}
                      </div>

                      <div className="border-t border-white/10 pt-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-3xl font-bold text-white">${room.price}</p>
                            <p className="text-sm text-gray-400">per night</p>
                          </div>
                          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default Reserver
