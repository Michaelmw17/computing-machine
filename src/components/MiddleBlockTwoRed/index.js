import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

import * as S from './styles';

const Row = lazy(() =>
  import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/row')
);
const Col = lazy(() =>
  import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/col')
);

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const MiddleBlock = ({ title, content, button }) => {
  return (
    <S.MiddleBlock>
      <Suspense fallback={<div>Loading...</div>}>
        <Row type="flex" justify="center" align="middle">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
          >
            <S.ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <S.Content>{content}</S.Content>
              </Col>
            </S.ContentWrapper>
          </motion.div>
        </Row>
      </Suspense>
    </S.MiddleBlock>
  );
};

export default MiddleBlock;
