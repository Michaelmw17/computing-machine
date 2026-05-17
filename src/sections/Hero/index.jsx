import React from 'react';
import { ContactMail as ContactMailIcon } from '@mui/icons-material';
import { Build as BuildIcon } from '@mui/icons-material';
import { Row, Col } from 'antd';
import ButtonAnimated from '../../common/ButtonAnimation/AnimationButton';
import Button from '../../common/Button';
import HeroImage from '../../components/HeroImage';
import * as S from './styles';
import './styles.css';

const Hero = () => {
  return (
    <S.HeroContainer>
      <Row
        type="flex"
        justify="space-between"
        align="middle"
        id="intro"
        gutter={0}
      >
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 11, offset: 1 }}>
          <S.ContentWrapper>
            <h1 className="main-title" id="main-title">
              Welcome to
              <br />
              JDP Electrical Services
            </h1>

            <S.Content>
              'North Shore’s most trusted and experienced family electrical
              contractors, with over 60 years combined experience.'
            </S.Content>
            <S.Content>
              JDP Electrical Services offer a complete range of electrical
              installations and services throughout Sydney, North Shore Region
              and surrounding areas.
            </S.Content>

            <Row type="flex" justify="start" id="Button-top" gutter={0}>
              <Col xs={24} sm={24} md={20} lg={20} xl={18}>
                <S.ButtonWrapper className="button-group">
                  <ButtonAnimated>
                    <S.Span>
                      Our Services
                      <BuildIcon
                        className="icon"
                        style={{
                          fontSize: 20,
                          marginBottom: -2,
                          paddingLeft: 6,
                        }}
                      />
                    </S.Span>
                  </ButtonAnimated>
                  <Button as="a" href="#Team">
                    Contact Us
                    <ContactMailIcon
                      style={{
                        color: '#FFF',
                        fontSize: 25,
                        paddingLeft: 6,
                        marginBottom: -2,
                      }}
                    />
                  </Button>
                </S.ButtonWrapper>
              </Col>
            </Row>
          </S.ContentWrapper>
        </Col>

        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 11, offset: 1 }}>
          <HeroImage rel="preload" id="JDP-Electrical-light" />
        </Col>
      </Row>
    </S.HeroContainer>
  );
};

export default Hero;
