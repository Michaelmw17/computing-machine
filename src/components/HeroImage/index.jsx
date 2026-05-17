import React from 'react';
import './styles.css';

const HeroImage = () => (
  <picture>
    <source
      type="image/webp"
      srcSet={`${process.env.PUBLIC_URL}/images/light3_480.webp 480w, ${process.env.PUBLIC_URL}/images/light3_768.webp 768w, ${process.env.PUBLIC_URL}/images/light3_1536.webp 1536w`}
      sizes="(min-width: 900px) 50vw, 85vw"
    />
    <img
      src={process.env.PUBLIC_URL + '/images/light3_768.jpg'}
      srcSet={`${process.env.PUBLIC_URL}/images/light3.jpg 724w, ${process.env.PUBLIC_URL}/images/light3_768.jpg 768w`}
      sizes="(min-width: 900px) 50vw, 85vw"
      width="768"
      height="596"
      alt="Lighting installation by JDP Electrical Services"
      className="light"
      fetchpriority="high"
      decoding="async"
    />
  </picture>
);

export default HeroImage;
