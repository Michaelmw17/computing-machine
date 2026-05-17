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

const PhoneCallout = () => {
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
                Call JDP Electrical now on{' '}
                <a href="tel:02-9419-7947" id="TextNumber">
                  (02) 9419 7947
                </a>
              </S.Content>
            </S.ContentWrapper>
          </m.div>
        </Col>
      </Row>
    </S.MiddleBlock>
  );
};

export default PhoneCallout;
