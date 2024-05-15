import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = (data) => {
  console.log("scasc",data.data)
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one slide at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };


  return (
    <Slider {...settings}>
      {data.data.map((event, index) => (
        <div className='carousel-div' key={index}>

          <img className='carousel-image'  src={event.image} alt="" width="98%" height="600px" />
          <div className='shadow'></div>
          <h2 className='carousel-name' >{event["name"]}</h2>
          {console.log('qaf',event.name)}
        </div>
      ))}

      
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
