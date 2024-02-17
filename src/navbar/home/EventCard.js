import React from 'react';
import './EventCard.css';
import eventImage from './event.jpg'; 

function EventCard() {
  return (
    <div className="card">
      <img src={eventImage} alt="event" className="event-image" /> 
      <div className="event-details">
        <h2 className="event-name">COECSA Day</h2>
        <p className="description">Cheer on as your favorite performers and beloved student organizations battle it out to see who the best of the best is!</p>
        <div className ="datecollege">
        <p className="college">COECSA</p>
        <p className="date">November 11 2023</p></div>
      </div>
    </div>
  );
}

export default EventCard;
