import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const Block = ({ title, content, t }) => {
  return (
    <S.Container>
      <Fade left>
        <h3>{t(title)}</h3>
        <S.TextWrapper>
          <S.Content>{t(content)}</S.Content>
        </S.TextWrapper>
      </Fade>
    </S.Container>
  );
};

export default withTranslation()(Block);
