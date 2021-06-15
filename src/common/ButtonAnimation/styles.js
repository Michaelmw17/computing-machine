import styled from 'styled-components';

export const ButtonAnimated = styled.button`
  background: ${(props) => props.color || '#FFF'};
  color: ${(props) => (props.color ? 'rgb(209, 29, 50)' : '#fff')};
  font-size: 1rem;
  font-weight: 700;
  width: 45%;
  border: ${(props) => (props.color ? '5px solid rgb(209, 29, 50)' : '2px')};
  border-radius: 8px;
  height: 60px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  
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
