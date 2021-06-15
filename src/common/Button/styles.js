import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.color || 'rgb(209, 29, 50)'};
  color: ${(props) => (props.color ? 'rgb(209, 29, 50)' : '#fff')};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(props) => (props.color ? '1px solid #687864' : '0px')};
  border-radius: 8px;
  height: 60px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? '160px' : '100%')};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? '160px' : '100%')};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? '160px' : '100%')};
    margin-left: 0rem;
  }
  
`;
