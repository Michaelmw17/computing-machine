import React from 'react';
import './styleLocation.css';

const MapLink = ({ text, url = '#', target = '_blank' }) => (
  <a rel="noopener noreferrer" target={target} href={url}>
    {text}
  </a>
);

export default MapLink;
