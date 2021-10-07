import Fade from "react-reveal/Fade";

import * as S from "./styles";

const Block = ({ title, content }) => {
  return (
    <S.Container>
      <Fade left>
        <h3>{(title)}</h3>
        <S.TextWrapper>
          <S.Content>{(content)}</S.Content>
        </S.TextWrapper>
      </Fade>
    </S.Container>
  );
};

export default (Block);
