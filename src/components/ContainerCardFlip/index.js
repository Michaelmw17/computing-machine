import * as S from "./styles";

const ContainerCard = ({ padding, border, children }) => (
  <S.Container padding={padding} border={border}>
    {children}
  </S.Container>
);

export default ContainerCard;
