
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
const MyImageBlue = ({ image }) => (
  <LazyLoadImage
    effect="blur"
    alt="Neca"
    src={process.env.PUBLIC_URL + '/neca-nat-logo-text.png'} max-age="31536000"
    style={{
               display: "absolute",
                background: '#FFF',
                marginRight: "auto",
                height: "100%",
                width: "100%",
                maxWidth: "80%",
                maxHeight: "90%",
                left: '350px',
                postition: 'inherit'
            }}/>
);
export default MyImageBlue;