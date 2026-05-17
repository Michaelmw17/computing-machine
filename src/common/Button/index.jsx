import * as S from "./styles";

const Button = ({ color, width, children, onClick, ...rest }) => (
  <S.Button color={color} width={width} onClick={onClick} {...rest}>
    {children}
  </S.Button>
);

export default Button;
