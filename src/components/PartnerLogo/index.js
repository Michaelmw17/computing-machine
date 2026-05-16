import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './styles.css';

const PartnerLogo = ({ src, alt, className }) => (
  <LazyLoadImage
    effect="blur"
    src={process.env.PUBLIC_URL + src}
    alt={alt}
    className={className}
  />
);

export const InTheCovePartnerLogo = () => (
  <PartnerLogo
    src="/itc-logo-red.png"
    alt="In The Cove"
    className="red-icon"
  />
);

export const NecaPartnerLogo = () => (
  <PartnerLogo
    src="/neca-nat-logo-text.png"
    alt="NECA"
    className="blue-logo"
  />
);

export default PartnerLogo;
