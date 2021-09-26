
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './styles.css'
const MyImageBlue = ({ image }) => (
  <LazyLoadImage
    effect="blur"
    alt="Neca"
    src={process.env.PUBLIC_URL + '/neca-nat-logo-text.png'} max-age="31536000"
    className="blue-logo"/>
);
export default MyImageBlue;