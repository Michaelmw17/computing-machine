
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
const MyImageBlue = ({ image }) => (
  <LazyLoadImage
    effect="blur"
   src={process.env.PUBLIC_URL + '/IMG_1050.jpg'}
   max-age="31536000"
   alt="Group"
    style={{
                  display: "absolute",
                background: '#FFF',
                marginRight: "auto",
                height: "100%",
                width: "100%",
                maxWidth: "%",
                maxHeight: "80%",
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'drop-shadow(2.5px 2.5px 5px #000)',
                borderRadius: '5%',
            }
            
            }/>
);
export default MyImageBlue;