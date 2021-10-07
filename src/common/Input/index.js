// import { withTranslation } from "react-i18next";
import * as S from "./styles";

const Input = ({ id, name, placeholder, onChange }) => (
  <S.Container>
    <label htmlFor={name}>{(placeholder)}</label>
    <S.Input
      spellcheck="false"
      placeholder={(placeholder)}
      name={name}
      id={name}
      onChange={onChange}
    />
  </S.Container>
);

export default (Input);
