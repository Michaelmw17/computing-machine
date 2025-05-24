import React, { lazy, Fragment, Suspense, useRef } from 'react';
import Loader from 'react-loader-spinner';
import * as S from './styles';
import ScrollToTop from '../../components/ScrollTopFunc';
import { motion, useInView } from 'framer-motion';

const Row = React.lazy(() =>
  import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/row')
);
const Col = React.lazy(() =>
  import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/col')
);
const MyComp = lazy(() => import('../../components/MyComp/myComp'));
const MyCompRed = lazy(() => import('../../components/MyCompRed/myComp.js'));
const MyCompBlue = lazy(() => import('../../components/MyCompBlue/myComp.js'));
const Container = lazy(() => import('../../common/Container'));

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

const Footer = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Fragment>
      <motion.div
        ref={ref}
        variants={fadeInVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <S.Footer>
          <Container id="footer">
            <Row type="flex" justify="space-between">
              <Col lg={9} md={10} sm={12} xs={24}>
                <S.Title>{'Contact'}</S.Title>
                <S.Title style={{ textTransform: 'capitalize' }}>
                  {'Tell us everything'}
                </S.Title>
                <S.Para>
                  {`Do you have any question regarding our services? 
                    Feel free to reach out.`}
                </S.Para>
                <Mailto
                  email="info@jdpelectrical.com.au"
                  subject="Enquire To JDP"
                  body="Hello JDP!"
                >
                  <S.Chat>{`Email us`}</S.Chat>
                </Mailto>
              </Col>

              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Title>{'JDP Electrical Services'}</S.Title>
                <S.Large
                  left="true"
                  as="a"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                >
                  {'Home'}
                </S.Large>
                <S.Large
                  left="true"
                  as="a"
                  href="#Service"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('Service');
                  }}
                >
                  {'Services'}
                </S.Large>
                <S.Large
                  left="true"
                  as="a"
                  href="#mission"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('mission');
                  }}
                >
                  {'About'}
                </S.Large>
                <S.Large
                  left="true"
                  as="a"
                  href="#Review"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('Review');
                  }}
                >
                  {'Reviews'}
                </S.Large>
                <S.Large
                  left="true"
                  as="a"
                  href="#Team"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('Team');
                  }}
                >
                  {'Contact'}
                </S.Large>
              </Col>

              <Col lg={6} md={8} sm={12} xs={24}>
                <S.Title>{'ADDRESS'}</S.Title>
                <a
                  id="AddressJDP"
                  href="https://www.google.com/maps/place/J.D.P+Electrical+Services+Pty+Ltd/data=!4m2!3m1!1s0x0:0x5c7b67e5e57e4629?sa=X&ved=1t:2428&ictx=111"
                >
                  <S.Para>Unit 17</S.Para>
                  <S.Para>4-6 Chaplin Drive</S.Para>
                  <S.Para>Lane Cove West NSW 2066</S.Para>
                </a>
              </Col>

              <Col lg={9} md={10} sm={12} xs={24}>
                <S.Title>{'General & Accounts'}</S.Title>
                <S.Para>
                  <a href="tel:02-9419-7947" id="TextNumberGen">
                    {'Ph: (02) 9419 7947 '}
                  </a>
                </S.Para>
                <Mailto
                  email="info@jdpelectrical.com.au"
                  subject="Enquire To JDP"
                  body="Hello JDP!"
                >
                  <S.Chat>{`Info@jdpelectrical.com.au`}</S.Chat>
                </Mailto>
                <Mailto
                  email="accounts@jdpelectrical.com.au"
                  subject="Enquire To JDP"
                  body="Hello JDP!"
                >
                  <S.Chat>{`Accounts@jdpelectrical.com.au`}</S.Chat>
                </Mailto>
              </Col>

              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Title>{'Joe Panetta'}</S.Title>
                <S.Para>
                  <a href="tel:0412-450-300" id="TextNumberJoe">
                    {'Ph: 0412 450 300'}
                  </a>
                </S.Para>
              </Col>

              <Col lg={6} md={8} sm={12} xs={24}>
                <S.Title>{'Dominic Panetta'}</S.Title>
                <S.Para>
                  <a href="tel:0412-479-557" id="TextNumberDom">
                    {'Ph: 0412 479 557'}
                  </a>
                </S.Para>
              </Col>
            </Row>
          </Container>
        </S.Footer>
      </motion.div>

      <S.Extra>
        <ScrollToTop>
          <Container border="true">
            <Row
              gutter={[16, 16]}
              justify="space-around"
              align="middle"
              style={{ textAlign: 'center', marginTop: '3rem' }}
            >
              <Col xs={24} md={8}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToTop();
                    }}
                  >
                    <S.LogoContainer>
                      <MyComp />
                    </S.LogoContainer>
                  </a>
                </div>
              </Col>

              <Col xs={24} md={8}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToTop();
                    }}
                  >
                    <S.LogoContainer>
                      <MyCompRed />
                    </S.LogoContainer>
                  </a>
                </div>
              </Col>

              <Col xs={24} md={8}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToTop();
                    }}
                  >
                    <S.LogoContainer>
                      <MyCompBlue />
                    </S.LogoContainer>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </ScrollToTop>
      </S.Extra>
    </Fragment>
  );
};

export default Footer;
