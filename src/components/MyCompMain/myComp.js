import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './styles.css';
import Img from 'react-webp-image';

const MyComp = () => {
  return (
    <Img
      src={process.env.PUBLIC_URL + '/images/light3.jpg'}
      srcSet={process.env.PUBLIC_URL + '/images/light3_768.jpg 768w'}
      webp={process.env.PUBLIC_URL + '/images/light3_768.webp'}
      alt="Lighting JDP Electrical Services"
      className="light"
      loading="lazy"
      max-age="31536000"
    />
  );
};

export default MyComp;
