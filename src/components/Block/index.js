import React from 'react';
import { motion } from 'framer-motion';
import * as S from './styles';

const Block = ({ title, content }) => {
  return (
    <S.Container>
      <motion.div
        initial={{ opacity: 0, x: -100 }} // start slightly left & invisible
        animate={{ opacity: 1, x: 0 }} // fade in & slide to original
        transition={{ duration: 0.5 }}
      >
        <h3>{title}</h3>
        <S.TextWrapper>
          <S.Content>{content}</S.Content>
        </S.TextWrapper>
      </motion.div>
    </S.Container>
  );
};

export default Block;
