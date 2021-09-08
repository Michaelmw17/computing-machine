import styled from 'styled-components';

export const RightBlockContainer = styled.section`
  position: relative;
  padding: 12rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 7rem 0 5rem;
  }
`;

export const Content = styled.p`
  margin: 1.5rem 2rem 2rem 0;
  font-size: 20px;
  @media only screen and (max-width: 480px) {
   margin: 1.5rem 0 2rem 0;
  }
`;
export const Span = styled.p`
  margin: 0.4rem -5rem 0rem -6rem;
  font-size: 16px
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 640px;
  margin-left:1rem;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 400px;
  min-width: 400px;
  justify-content: space-between;
`;
