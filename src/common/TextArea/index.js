import * as S from "./styles";

const TextArea = ({ name, id, placeholder, onChange, t }) => (
  <S.Container>
    <S.TextArea
      spellcheck="false"
      placeholder={(placeholder)}
      id={name}
      name={name}
      onChange={onChange}
    />
  </S.Container>
);

export default (TextArea);
