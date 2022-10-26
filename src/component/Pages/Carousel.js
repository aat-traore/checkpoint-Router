import React from "react";
import  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ConCarouse =()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
        <>
       <Carousel interval={1000} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://avatarfiles.alphacoders.com/331/331944.jpg"
          alt="First slide"
          height={500}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.vudaf.com/wp-content/uploads/2022/05/The-Women-king-1140x800.jpg"
          alt="Second slide"
          height={500}
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media-mcetv.ouest-france.fr/wp-content/uploads/2022/07/black-panther-2-les-premieres-images-rendent-hommage-a-chadwick-boseman-.jpeg"
          alt="Third slide"
          height={500}
        />

       
      </Carousel.Item>
    </Carousel>
    </>
    )
}
export default ConCarouse;