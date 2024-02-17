import React from 'react';
import EventCard from './EventCard'; 
import './Home.css'; 

function Home() {
  return (
    <div className="home">
      <h1>Upcoming Events</h1> 
      <div className="event-cards">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default Home;
