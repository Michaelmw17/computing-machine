import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 5rem 10px;
  padding-left: 40px;
  padding-right: 40px;
  @media only screen and (min-width: 980px) {
    padding: 6rem 3rem;
  }
`;

export const Contact = styled.section`
  position: relative;
  width: 100%;
`;

export const IconContainer = styled.div`
  @media only screen and (min-width: 980px) {
    padding: 10rem 7rem;
  }
`;

export const FormGroup = styled.form`
  width: 100%;
  max-width: 520px;
  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled.span`
  display: block;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled.div`
  text-align: end;
  position: relative;
  margin-bottom: 2.75rem;
  margin-top: 0rem;
  @media only screen and (max-width: 414px) {
    // padding-top: 0.75rem;
  }
`;

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
  margin-top: 1rem;
  max-width: 180px;
  margin-bottom: 1rem;
  float: right;

  &:hover {
    background: #fff;
    color: #000;
    border: 2px solid rgb(209, 29, 50);
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
