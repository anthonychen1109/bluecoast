import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel-block">
      <div className="car-specials">
        <img className="car-logo" src={require('../assets/images/logo.png')} alt="logo"/>
        <h1>Daily Specials</h1>
        <div className="car-special-text">
          <ul>
            <li className="anchor"><h2>Teriyaki Chicken with Fried Rice</h2></li>
            <li className="anchor"><h2>Asian BBQ Chicken</h2></li>
          </ul>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="car-img" src={require('../assets/images/chicken-teriyaki.jpg')} alt="teriyaki chicken"/>
          </div>

          <div className="carousel-item">
            <img className="car-img" src={require('../assets/images/bbq-chicken.jpg')} alt="asian bbq chicken"/>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Carousel;
