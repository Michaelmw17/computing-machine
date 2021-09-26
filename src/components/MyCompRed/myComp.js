import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './styles.css'
const MyImageRed = ({ image }) => (
  <LazyLoadImage
    effect="blur"
    max-age="31536000"
    src={process.env.PUBLIC_URL + '/itc-logo-red.png'} 
    alt="In The Cove"
    className="red-icon"/>
);
export default MyImageRed;