import React, { lazy, Suspense } from 'react';
import ButtonAnimated from '../../../common/ButtonAnimation/AnimationButton';
import './styling.css';
import Button from '../../../common/Button';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BuildlIcon from '@material-ui/icons/Build';
import Loader from 'react-loader-spinner';
import { motion } from 'framer-motion';
import * as S from './styles';

const Row = React.lazy(() =>
  import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/row')
);
const Col = React.lazy(() =>
  import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/col')
);

const Image = lazy(() => import('../../MyCompMain/myComp.js'));

const RightBlock = ({ title, content, contentTwo, button, icon, id }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <S.RightBlockContainer>
      <Row
        type="flex"
        justify="space-between"
        align="middle"
        id={id}
        gutter={0}
      >
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 11, offset: 1 }}>
          <S.ContentWrapper>
            <h3 className="Main-Title" id="Main-Title">
              {title.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>

            <S.Content>{content}</S.Content>
            <S.Content>
              JDP Electrical Services offer a complete range of electrical
              installations and services throughout Sydney, North Shore Region
              and surrounding areas.
            </S.Content>

            <Row type="flex" justify="start" id="Button-top" gutter={0}>
              <Col xs={24} sm={24} md={20} lg={20} xl={18}>
                <S.ButtonWrapper className="button-group">
                  {button?.map((item, id) => (
                    <ButtonAnimated key={`animated-${id}`}>
                      <S.Span>
                        {item.title1}
                        <BuildlIcon
                          className="icon"
                          style={{ fontSize: 17, marginBottom: -3 }}
                        />
                      </S.Span>
                    </ButtonAnimated>
                  ))}
                  {button?.map((item, id) => (
                    <Button
                      key={`button-${id}`}
                      color={item.color}
                      onClick={() => scrollTo('Team')}
                    >
                      {item.title}
                      <ContactMailIcon
                        style={{
                          color: '#FFF',
                          fontSize: 25,
                          paddingLeft: 6,
                          marginBottom: -2,
                        }}
                      />
                    </Button>
                  ))}
                </S.ButtonWrapper>
              </Col>
            </Row>
          </S.ContentWrapper>
        </Col>

        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 11, offset: 1 }}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
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
              <Image rel="preload" id="JDP-Electrical-light" />
            </Suspense>
          </motion.div>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default RightBlock;
