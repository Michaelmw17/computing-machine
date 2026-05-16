import React from 'react';
import './styles.css';

const BrandLogo = () => (
  <picture>
    <source
      type="image/webp"
      srcSet={`${process.env.PUBLIC_URL}/JDP-BRANDING-04.webp`}
    />
    <img
      src={process.env.PUBLIC_URL + '/JDP-BRANDING-04.png'}
      alt="JDP Electrical Services logo"
      className="brand-logo"
      width="550"
      height="79"
      decoding="async"
      fetchpriority="high"
    />
  </picture>
);

export default BrandLogo;
