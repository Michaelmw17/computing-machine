import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import * as S from './styles';

const Row = lazy(() =>
  import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/row')
);
const Col = lazy(() =>
  import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/col')
);

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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariant}
            style={{ width: '100%' }}
          >
            <S.ContentWrapper>
              {title && <h3>{title}</h3>}
              <S.Content>{content}</S.Content>
              {/* Render button(s) here if needed */}
            </S.ContentWrapper>
          </motion.div>
        </Col>
      </Row>
    </S.MiddleBlock>
  );
};

export default MiddleBlock;
