import React from 'react';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
import { m } from 'framer-motion';
import * as S from './styles';

const MiddleBlock = ({ title, content, button }) => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

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
              {title && <h3>{title}</h3>}
              <S.Content>
                {content}{' '}
                <a href="tel:02-9419-7947" id="TextNumber">
                  (02) 9419 7947
                </a>
              </S.Content>
              {/* Render button(s) here if needed */}
            </S.ContentWrapper>
          </m.div>
        </Col>
      </Row>
    </S.MiddleBlock>
  );
};

export default MiddleBlock;
