import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageSlider.css';


const CustomCarousel = () => {

  return (
    <div className="custom-carousel-container">
      <Carousel>
        <div className="carousel-slide" style={{ backgroundImage: `url(https://tse3.mm.bing.net/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&pid=Api&P=0&h=180)` }} />
        <div className="carousel-slide" style={{ backgroundImage: `url(https://tse4.mm.bing.net/th?id=OIP.XahRQHnmZYdKTkYxKAYHmAHaFj&pid=Api&P=0&h=180)` }} />
        <div className="carousel-slide" style={{ backgroundImage: `url(https://tse2.mm.bing.net/th?id=OIP.gwvaCTBDdkKS-TU9IQcjngHaFj&pid=Api&P=0&h=180)` }} />
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
