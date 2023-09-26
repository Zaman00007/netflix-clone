import React, { useEffect, useState } from 'react';
import './Nav.css'; // Import your CSS file for styling

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Provide both the event type and event handler function for removal
    return () => {
      
      
      window.removeEventListener('scroll', handleScroll);
      
    };
  }, []);

  return (
    <div className={`nav ${show && 'black'}`}>
      <img
        className='Nav-logo'
        src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png'
        alt='Netflix-logo'
      />
      <img
        className='Nav-avatar'
        src='https://loodibee.com/wp-content/uploads/Netflix-avatar-1-300x300.png'
        alt='Netflix-logo'
      />
    </div>
  );
}

export default Nav;
