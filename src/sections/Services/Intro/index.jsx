import React from 'react';
import { Row } from 'antd';
import { Col } from 'antd';
import * as S from './styles';

const ServicesIntro = () => {
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle" id="Row">
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h2 style={{ marginBottom: '0px' }}>Services</h2>
              <S.Content>
                JDP Electrical Services offer a complete range of electrical
                installations and services throughout Sydney, North Shore
                Region and surrounding areas.
              </S.Content>
            </Col>
          </S.ContentWrapper>
      </Row>
    </S.MiddleBlock>
  );
};

export default ServicesIntro;
