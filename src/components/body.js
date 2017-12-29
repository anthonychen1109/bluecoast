import React from 'react';

//COMPONENTS
import Carousel from './carousel';

const Body = () => {
  return (
    <div className="body container">
      <Carousel />

      <div className="menu">
        <div className="menu-1">
          <img src={require('../assets/images/menu-1.png')}/>
        </div>
        <div className="menu-2">
          <img src={require('../assets/images/menu-2.png')}/>
        </div>
      </div>

      <div className="order-menu">
        <div className="order-menu-1">
        </div>
        <div className="order-menu-2">
        </div>
      </div>

    </div>
  )
}

export default Body;
