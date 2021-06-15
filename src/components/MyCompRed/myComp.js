import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
const MyImageRed = ({ image }) => (
  <LazyLoadImage
    effect="blur"
    max-age="31536000"
    src={process.env.PUBLIC_URL + '/itc-logo-red.png'} 
    alt="In The Cove"
    style={{
               display: "absolute",
                background: '#FFF',
                marginRight: "auto",
                marginTop: "15px",
                height: "100%",
                width: "100%",
                maxWidth: "90%",
                maxHeight: "80%",
                left: '850px',
            }}/>
);
export default MyImageRed;