import React, { useState, useRef } from 'react';
import { FormatQuote as FormatQuoteIcon } from '@mui/icons-material';
import { m, useInView } from 'framer-motion';
import './stylesCarousel.css';

const items = [
  {
    description:
      "Mary (Mosman) - 'Joe and Dominic have been our electricians for over 12 years, delivering high quality service including major electrical renovations and outdoor lighting. Joe and Dominic are a pleasure to have working in our home and we highly recommend their services.'",
  },
  {
    description:
      "Callum - 'Fast, professional and reliable. Highly recommend'",
  },
  {
    description:
      "Bryant (Lane Cove North) - 'Polite, professional, honest and timely. Very competitive rates. A breath of fresh air and would highly recommend them.'",
  },
];

const Item = ({ item }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div id="Paper" className="jdp-carousel-paper">
      <m.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="container-car">
          <div className="review">
            <h1 id="review-h1">Our Reviews</h1>
            <div className="Icon">
              <FormatQuoteIcon
                style={{
                  color: '#FFF',
                  fontSize: 55,
                  textAlign: 'right',
                  marginTop: '-10px',
                }}
              />
            </div>
            {item.description}
            <p id="review-p">
              {item.name}
              <span id="review-star-spans">
                <span className="star-icon filled">★</span>
                <span className="star-icon filled">★</span>
                <span className="star-icon filled">★</span>
                <span className="star-icon filled">★</span>
                <span className="star-icon filled">★</span>
              </span>
            </p>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const count = items.length;

  const goTo = (next) => setIndex(((next % count) + count) % count);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <div className="jdp-carousel" role="region" aria-roledescription="carousel">
      <button
        type="button"
        className="jdp-carousel__nav jdp-carousel__nav--prev"
        aria-label="Previous review"
        onClick={prev}
      >
        ‹
      </button>

      <div className="jdp-carousel__viewport">
        <Item key={index} item={items[index]} />
      </div>

      <button
        type="button"
        className="jdp-carousel__nav jdp-carousel__nav--next"
        aria-label="Next review"
        onClick={next}
      >
        ›
      </button>

      <div className="jdp-carousel__dots" role="tablist">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Review ${i + 1}`}
            className={`jdp-carousel__dot${
              i === index ? ' jdp-carousel__dot--active' : ''
            }`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
