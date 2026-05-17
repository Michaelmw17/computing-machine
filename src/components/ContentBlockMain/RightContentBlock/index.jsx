import React from 'react';
import { ContactMail as ContactMailIcon } from '@mui/icons-material';
import { Build as BuildlIcon } from '@mui/icons-material';
import { Row } from 'antd';
import { Col } from 'antd';
import ButtonAnimated from '../../../common/ButtonAnimation/AnimationButton';
import Button from '../../../common/Button';
import HeroImage from '../../HeroImage';
import * as S from './styles';
import './styling.css';

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
            <h3 className="main-title" id="main-title">
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
          <HeroImage rel="preload" id="JDP-Electrical-light" />
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default RightBlock;
