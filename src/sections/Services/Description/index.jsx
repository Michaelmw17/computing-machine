import React from 'react';
import { Row } from 'antd';
import { Col } from 'antd';
import { m } from 'framer-motion';
import * as S from './styles';

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ServicesDescription = () => {
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle">
        <Col lg={24} md={24} sm={24} xs={24}>
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariant}
            style={{ width: '100%' }}
          >
            <S.ContentWrapper>
              <S.Content>
                Our highly skilled and experienced team will provide
                professional and personable advice and recommendations to
                ensure all your electrical needs are met.
              </S.Content>
            </S.ContentWrapper>
          </m.div>
        </Col>
      </Row>
    </S.MiddleBlock>
  );
};

export default ServicesDescription;
