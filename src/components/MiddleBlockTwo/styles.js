import styled from 'styled-components';

export const MiddleBlock = styled.section`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  padding: 0.75rem 2.1rem 0.1rem 2.35rem;
  font-size: 21px
`;

export const ContentWrapper = styled.div`
  max-width: 770px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    max-width: 520px;
  }
`;
