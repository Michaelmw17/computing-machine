import styled from 'styled-components';

export const RightBlockContainer = styled.section`
  position: relative;
  padding: 5.5rem 0 2rem;

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 5rem;
    text-align: center;
  }
  @media only screen and (max-width: 414px) {
    padding: 1rem 0 5rem;
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
  font-size: 16px;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 640px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    margin: 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  // flex-wrap: wrap;
  gap: 12px;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin-top: 20px;
`;
