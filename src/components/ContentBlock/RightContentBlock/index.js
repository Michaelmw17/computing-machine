import React, { Suspense, lazy } from 'react';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';

import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
import { motion } from 'framer-motion';
import ButtonAnimated from '../../../common/ButtonAnimation/AnimationButton';
import * as S from './styles';
import './styling.css';

const Row = React.lazy(() =>
  import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/row')
);
const Col = React.lazy(() =>
  import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/col')
);
const ImageMain = lazy(() => import('../../LazyImages/index.js'));

const slideLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const RightBlock = ({ title, content, contentTwo, button, icon, id }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <Suspense fallback={<div>Loading... </div>}>
      <S.RightBlockContainer>
        <Row type="flex" justify="space-between" align="middle" id={id}>
          <Col lg={12} md={24} sm={24} xs={24}>
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <S.ContentWrapper>
                <h3>{title}</h3>
                <S.Content>{content}</S.Content>
                <S.Content>
                  Brothers Dominic and Joseph Panetta have built a reputable
                  electrical contracting business specialising in all electrical
                  installations and repairs for Residential and Commercial
                  sectors.{' '}
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
                  contractors..
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
                  <Col lg={12} md={24} sm={24} xs={24}></Col>
                  <h6
                    style={{
                      color: 'black',
                      fontSize: 20,
                      textAlign: 'center',
                      marginTop: -100,
                    }}
                  >
                    <S.CustomNavLinkSmall>
                      <div id="ButtonMain">
                        <a href="tel:02-9419-7947">
                          <Button
                            classes={{
                              root: 'buttonMainAbout',
                              label: 'button-label-main',
                            }}
                            style={{
                              marginBottom: 0,
                              marginTop: 70,
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
                            <p className="p-Call-us-now-main"> Call us now </p>
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
                  </h6>
                </div>
                <Row>
                  <div className="row">
                    <div className="col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0">
                      <S.ButtonWrapper>
                        {button &&
                          typeof button === 'object' &&
                          button.map((item, id) => {
                            return (
                              <ButtonAnimated key={id}>
                                <S.Span>{item.title1}</S.Span>
                              </ButtonAnimated>
                            );
                          })}
                      </S.ButtonWrapper>
                      <S.ButtonWrapper>
                        {button &&
                          typeof button === 'object' &&
                          button.map((item, id) => {
                            return (
                              <Button
                                key={id}
                                color={item.color}
                                width="true"
                                onClick={() => scrollTo('Team')}
                              >
                                {item.title}
                              </Button>
                            );
                          })}
                      </S.ButtonWrapper>
                    </div>
                  </div>
                </Row>
              </S.ContentWrapper>
            </motion.div>
          </Col>
          <Col xs={{ span: 22, offset: 2 }} lg={{ span: 11, offset: 1 }}>
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Suspense
                fallback={
                  <div>
                    <Loader
                      type="Rings"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000}
                    />
                  </div>
                }
              >
                <ImageMain rel="preload" id="JoeDominic" />
              </Suspense>
            </motion.div>
          </Col>
        </Row>
      </S.RightBlockContainer>
    </Suspense>
  );
};

export default RightBlock;
