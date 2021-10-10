import React, { lazy } from 'react'
import MissionContent from "../../content/MissionContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import MiddleBlockContentTwo from "../../content/MiddleBlockContentTwo.json";
import MiddleBlockContentThree from "../../content/MiddleBlockContentThree.json";
import MiddleBlockTwoRedText from "../../content/MiddleBlockContentTwoRed.json";
import ContactContent from "../../content/ContactContent.json";
import IntroContent from "../../content/IntroContent.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContentBlockMain from "../../components/ContentBlockMain";

import './about.css'
const MeetTheTeam = lazy(() => import('../../components/ServicesSection/Services.js'))
const Carousel = lazy(() => import("../../components/CarouselTest/Carousel"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ContactFrom = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const MiddleBlockTwo = lazy(() => import("../../components/MiddleBlockTwo"));
const MiddleBlockTwoRed = lazy(() => import("../../components/MiddleBlockTwoRed"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

function First() {
    document.body.scroll = "yes";
    document.body.style.overflow = 'visible';
    document.height = window.innerHeight;
    return (<>
        <div className="whiteContainer">
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
                  id="intro" />
                  </Container>
                  <div id="Service">
                    <MiddleBlock
                      title={MiddleBlockContent.title}
                      content={MiddleBlockContent.text}/>
                        <MeetTheTeam/>
                      <MiddleBlockTwo
                          content={MiddleBlockContentTwo.text} />
                      <MiddleBlockTwoRed
                        content={MiddleBlockTwoRedText.text} />
                    <MiddleBlockTwo
                      content={MiddleBlockContentThree.text} />
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
                    <Carousel/>
                  </div>
                <ContactFrom
                  title={ContactContent.title}
                  content={ContactContent.text}
                  href={ContactContent.href}
                  id="Team"/>
              <Footer />
          </div>
      </>
  );
}

export default First;
