import React from 'react';
import { Row } from 'antd';
import { Col } from 'antd';
import { m } from 'framer-motion';

import * as S from './styles';

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ServicesQuote = ({ content }) => {
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle">
        <m.div
          initial="hidden"
          animate="visible"
          variants={fadeVariants}
        >
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <S.Content>{content}</S.Content>
            </Col>
          </S.ContentWrapper>
        </m.div>
      </Row>
    </S.MiddleBlock>
  );
};

export default ServicesQuote;
