import React, { Suspense, lazy } from 'react';
import { PhoneForwarded as PhoneForwardedIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Row, Col } from 'antd';
import { m } from 'framer-motion';
import Spinner from '../../common/Spinner';
import * as S from './styles';
import './styles.css';

const ImageMain = lazy(() => import('../../components/LazyImages'));

const slideLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <S.AboutContainer>
        <Row type="flex" justify="space-between" align="middle" id="mission">
          <Col lg={12} md={24} sm={24} xs={24}>
            <m.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <S.ContentWrapper>
                <h2>About us</h2>
                <S.Content>
                  JDP Electrical has been providing Electrical Services
                  throughout Sydney, North Shore Region and surrounding areas
                  for over 30 years
                </S.Content>
                <S.Content>
                  Brothers Dominic and Joseph Panetta have built a reputable
                  electrical contracting business specialising in all electrical
                  installations and repairs for Residential and Commercial
                  sectors.
                </S.Content>
                <S.Content>
                  We offer expert advice to customers, and assist them with
                  design and implementation solutions providing them with
                  lasting, efficient and practical lighting designs. We ensure
                  all your electrical needs are met.
                </S.Content>
                <S.Content>
                  Our guarantee of quality work and our commitment to providing
                  the best and most cost-effective solutions to your electrical
                  needs, is why JDP Electrical are known as trusted electrical
                  contractors.
                </S.Content>
                <div>
                  <p
                    style={{
                      color: 'red',
                      fontSize: 22,
                      textAlign: 'center',
                      marginBottom: 0,
                      marginTop: -10,
                      padding: ' 0.5rem 0.5rem 0.1rem 0.5rem',
                    }}
                  >
                    “Our approach is simple – we treat your home like our own.”
                  </p>
                  <div
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <S.CustomNavLinkSmall>
                      <div id="ButtonMain">
                        <a
                          href="tel:02-9419-7947"
                          aria-label="Call JDP Electrical now on (02) 9419 7947"
                        >
                          <Button
                            className="call-us-button"
                            style={{
                              marginBottom: 0,
                              marginTop: 16,
                              fontSize: '1rem',
                              fontWeight: 600,
                              width: '100%',
                              border: '2px solid  rgb(209, 29, 50)',
                              borderRadius: '8px',
                              height: '55px',
                              right: '0',
                              outline: 'none',
                              cursor: 'pointer',
                              maxWidth: '180px',
                            }}
                          >
                            <span className="call-us-label">Call us now</span>
                            <PhoneForwardedIcon
                              style={{
                                width: '0.7em',
                                marginBottom: '6px',
                              }}
                            />
                          </Button>
                        </a>
                      </div>
                    </S.CustomNavLinkSmall>
                  </div>
                </div>
              </S.ContentWrapper>
            </m.div>
          </Col>
          <Col xs={{ span: 22, offset: 1 }} lg={{ span: 11, offset: 1 }}>
            <m.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Suspense fallback={<Spinner />}>
                <ImageMain rel="preload" id="JoeDominic" />
              </Suspense>
            </m.div>
          </Col>
        </Row>
      </S.AboutContainer>
    </Suspense>
  );
};

export default About;
