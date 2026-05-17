import React, { lazy, useEffect } from 'react';
import MissionContent from '../../content/MissionContent.json';
import MiddleBlockContent from '../../content/MiddleBlockContent.json';
import MiddleBlockContentTwo from '../../content/MiddleBlockContentTwo.json';
import MiddleBlockContentThree from '../../content/MiddleBlockContentThree.json';
import MiddleBlockTwoRedText from '../../content/MiddleBlockContentTwoRed.json';
import ContactContent from '../../content/ContactContent.json';
import IntroContent from '../../content/IntroContent.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentBlockMain from '../../components/ContentBlockMain';

import './about.css';
const FlipperCards = lazy(() => import('../../components/FlippingCards'));
const Carousel = lazy(() => import('../../components/CarouselTest/Carousel'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const ContactFrom = lazy(() => import('../../components/ContactForm'));
const ServicesIntro = lazy(() => import('../../components/ServicesIntro'));
const ServicesDescription = lazy(() =>
  import('../../components/ServicesDescription')
);
const PhoneCallout = lazy(() => import('../../components/PhoneCallout'));
const ServicesQuote = lazy(() => import('../../components/ServicesQuote'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));

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
          <ScrollToTop />
          <ContentBlockMain
            type="right"
            first="true"
            title={IntroContent.title}
            content={IntroContent.text}
            button={IntroContent.button}
            icon="developer.svg"
            id="intro"
          />
        </Container>
        <div id="Service">
          <ServicesIntro
            title={MiddleBlockContent.title}
            content={MiddleBlockContent.text}
          />
          <FlipperCards />
          <ServicesDescription content={MiddleBlockContentTwo.text} />
          <ServicesQuote content={MiddleBlockTwoRedText.text} />
          <PhoneCallout content={MiddleBlockContentThree.text} />
        </div>
        <Container>
          <div id="People"></div>
          <ContentBlock
            type="right"
            title={MissionContent.title}
            content={MissionContent.text}
            icon="product-launch.svg"
            id="mission"
          />
        </Container>
        <div id="Review">
          <Carousel />
        </div>
        <ContactFrom
          title={ContactContent.title}
          content={ContactContent.text}
          href={ContactContent.href}
          id="Team"
        />
        <Footer />
    </main>
  );
};

export default Home;
