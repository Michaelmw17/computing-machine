import styled from 'styled-components';

export const Up = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 18px;
  line-height: 1.5715;
  list-style: none;
  position: fixed;
  right: 100px;
  bottom: 50px;
  z-index: 1100;
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    right: 20px;
    bottom: calc(20px + env(safe-area-inset-bottom, 0));
  }
`;
