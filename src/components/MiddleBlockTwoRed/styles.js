import styled from 'styled-components';

export const MiddleBlock = styled.section`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  color: Red;
  font-size: 32px @media screen and (max-width: 768px) {
    padding: 0.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  padding: 0.5rem 1.5rem 0.1rem 1.5rem;
  font-size: 1.5rem;
  color: Red;
`;

export const ContentWrapper = styled.div`
  max-width: 770px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    max-width: 520px;
  }
`;
