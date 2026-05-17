import React, { lazy, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../sections/Hero';
import Container from '../../common/Container';
import ScrollToTopButton from '../../common/ScrollToTopButton';

import './about.css';
const FlipperCards = lazy(() => import('../../components/FlippingCards'));
const Testimonials = lazy(() => import('../../components/Testimonials'));
const About = lazy(() => import('../../sections/About'));
const Contact = lazy(() => import('../../sections/Contact'));
const ServicesIntro = lazy(() => import('../../sections/Services/Intro'));
const ServicesDescription = lazy(() =>
  import('../../sections/Services/Description')
);
const ServicesQuote = lazy(() => import('../../sections/Services/Quote'));
const PhoneCallout = lazy(() => import('../../sections/Services/PhoneCallout'));

const Home = () => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'visible';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <main className="white-container">
      <Container>
        <Header />
        <ScrollToTopButton />
        <Hero />
      </Container>
      <div id="Service">
        <ServicesIntro />
        <FlipperCards />
        <ServicesDescription />
        <ServicesQuote />
        <PhoneCallout />
      </div>
      <Container>
        <div id="People"></div>
        <About />
      </Container>
      <div id="Review">
        <Testimonials />
      </div>
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
