import React, { lazy, Fragment, useRef } from 'react';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
import * as S from './styles';
import ScrollToTop from '../../components/ScrollTopFunc';
import { m, useInView } from 'framer-motion';

const BrandLogo = lazy(() => import('../../components/BrandLogo'));
const InTheCovePartnerLogo = lazy(() =>
  import('../../components/PartnerLogo').then((m) => ({
    default: m.InTheCovePartnerLogo,
  }))
);
const NecaPartnerLogo = lazy(() =>
  import('../../components/PartnerLogo').then((m) => ({
    default: m.NecaPartnerLogo,
  }))
);
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
      <m.div
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
                <S.NavButton left="true" type="button" onClick={scrollToTop}>
                  Home
                </S.NavButton>
                <S.NavButton
                  left="true"
                  type="button"
                  onClick={() => scrollTo('Service')}
                >
                  Services
                </S.NavButton>
                <S.NavButton
                  left="true"
                  type="button"
                  onClick={() => scrollTo('mission')}
                >
                  About
                </S.NavButton>
                <S.NavButton
                  left="true"
                  type="button"
                  onClick={() => scrollTo('Review')}
                >
                  Reviews
                </S.NavButton>
                <S.NavButton
                  left="true"
                  type="button"
                  onClick={() => scrollTo('Team')}
                >
                  Contact
                </S.NavButton>
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
      </m.div>

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
                  <S.LogoButton
                    type="button"
                    aria-label="Scroll to top"
                    onClick={scrollToTop}
                  >
                    <S.LogoContainer>
                      <BrandLogo />
                    </S.LogoContainer>
                  </S.LogoButton>
                </div>
              </Col>

              <Col xs={24} md={8}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <S.LogoContainer>
                    <InTheCovePartnerLogo />
                  </S.LogoContainer>
                </div>
              </Col>

              <Col xs={24} md={8}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <S.LogoContainer>
                    <NecaPartnerLogo />
                  </S.LogoContainer>
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
