import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.color || 'rgb(209, 29, 50)'};
  color: ${(props) => (props.color ? 'rgb(209, 29, 50)' : '#fff')};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid rgb(209, 29, 50);
  border-radius: 8px;
  height: 60px;
  outline: none;
  cursor: pointer;
  max-width: 180px;
  transition: background-color 0.3s ease, color 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  svg {
    fill: ${(props) => (props.color ? 'rgb(209, 29, 50)' : '#fff')};
    transition: fill 0.3s ease;
  }

  &:hover {
    background: #fff;
    color: black;
    border: 2px solid rgb(209, 29, 50);

    svg {
      fill: black; /* Icon color changes to black on hover */
    }
  }

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? '180px' : '100%')};
  }
  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? '180px' : '100%')};
  }
  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? '180px' : '100%')};
    margin-left: 0rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }
`;
