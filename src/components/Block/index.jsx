import React from 'react';
import { m } from 'framer-motion';
import * as S from './styles';

const Block = ({ title, content }) => {
  return (
    <S.Container>
      <m.div
        initial={{ opacity: 0, x: -100 }} // start slightly left & invisible
        animate={{ opacity: 1, x: 0 }} // fade in & slide to original
        transition={{ duration: 0.5 }}
      >
        <h2>{title}</h2>
        <S.TextWrapper>
          <S.Content>{content}</S.Content>
        </S.TextWrapper>
      </m.div>
    </S.Container>
  );
};

export default Block;
