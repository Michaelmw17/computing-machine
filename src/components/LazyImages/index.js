import React from 'react';
import './styles.css';

const MyImage = () => (
  <picture>
    <source
      type="image/webp"
      srcSet={`${process.env.PUBLIC_URL}/images/IMG_1050_768.webp 768w, ${process.env.PUBLIC_URL}/images/IMG_1050_1536.webp 1536w`}
      sizes="(min-width: 900px) 50vw, 85vw"
    />
    <img
      src={process.env.PUBLIC_URL + '/images/IMG_1050_768.jpg'}
      srcSet={`${process.env.PUBLIC_URL}/images/IMG_1050_768.jpg 768w`}
      sizes="(min-width: 900px) 50vw, 85vw"
      width="768"
      height="512"
      alt="Joe and Dominic"
      className="Joe-image"
      loading="lazy"
      decoding="async"
    />
  </picture>
);
export default MyImage;
