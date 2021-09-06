import styled from 'styled-components';

export const MiddleBlock = styled.section`
  position: relative;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0.1rem 0 1rem;
  }
`;

export const Content = styled.p`
  padding: 1.75rem 1.1rem 0.1rem 1.35rem;
  font-size: 21px;
`;

export const ContentWrapper = styled.div`
  max-width: 870px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    max-width: 520px;
  }
`;
