import React from 'react';
import './styles.css'
import Img from "react-webp-image";

const MyImage = ({ image }) => (
  <Img
    src={ process.env.PUBLIC_URL + '/images/IMG_1050.jpg'} 
    srcSet={ process.env.PUBLIC_URL + '/images/IMG_1050_768.jpg 768w'  }
    webp={process.env.PUBLIC_URL + '/images/IMG_1050_768.webp'}
    alt="Joe and Dominic"
    className="Joe-image"
    />
);
export default MyImage;