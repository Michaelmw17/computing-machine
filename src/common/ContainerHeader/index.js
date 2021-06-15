import * as S from "./styles";

const ContainerHeader = ({ padding, border, children }) => (
  <S.ContainerHeader padding={padding} border={border}>
    {children}
  </S.ContainerHeader>
);

export default ContainerHeader;
