import styled from 'styled-components';

export const RightBlockContainer = styled.section`
  position: relative;
  padding: 0rem 1rem 1rem 2rem @media only screen and (max-width: 768px) {
    padding: 0em 0 6rem;
  }
`;
export const NavLink = styled.div`
  display: inline-block;
  text-align: center;
`;
export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
  font-size: 20px;
`;
export const Span = styled.p`
  margin: -0.2rem 3rem 0rem -1rem;
  font-size: 16px;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 640px;
  margin: 0 auto;
  @media only screen and (max-width: 480px) {
    margin: 2rem 0.6rem;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 400px;
  min-width: 400px;
  justify-content: space-between;
`;
export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1rem;
  color: #white;
  transition: color 0.2s ease-in;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;
