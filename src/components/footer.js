import React from 'react';

const Footer = () => {
  return (
    <div className="footer">

      <div class="card text-center">
        <div class="card-header">
          <h3>Address:</h3>
        </div>
        <div class="card-block">
          <p className="card-text">8298 CHAMPIONS GATE BLVD</p>
          <p className="card-text">CHAMPIONSGATE, FL 33896</p>
          <p className="card-text">Tel: 407-479-2023</p>
          <p className="card-text">Tel: 407-479-2025</p>
        </div>
      </div>

      <div class="card text-center">
        <div class="card-header">
          <h3 className="card-title">Open Hours:</h3>
        </div>
        <div class="card-block">
          <p className="card-text">Sun - Thurs: 11:00 AM - 11:00 PM</p>
          <p className="card-text">Fri - Sat: 11:00 AM - 12:00 AM</p>
        </div>
      </div>

    </div>
  )
}

export default Footer;
