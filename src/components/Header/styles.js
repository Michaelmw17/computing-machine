import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

export const Header = styled.header`
  padding: 1rem 0.0rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  z-index: 10;
  background: #FFF;

  
  

`;

export const LogoContainer = styled(Link)`
  display: flex;
  padding-top: 0.8rem;
   position: sticky;
  top: 0;
  left: auto;
`;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
    background: #FFF;
    
    
  
`;

export const NavLink = styled.div`
  display: inline-block;
  text-align: center;
  
`;
export const CustomNavLink = styled.div`
  width: 203px;
  display: inline-block;
  

  @media only screen and (max-width: 411px) {
    width: 150px;
    
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
    
  }
`;

export const ContactWrapper = styled.div`
  cursor: pointer;
  width: ${(props) => (props.width ? '100%' : '110px')};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
  
`;

export const Burger = styled.div`
  @media only screen and (max-width: 1289px) {
    display: block !important;
    
  }
  padding: 1.25rem 1.25rem;
  display: none;
`;

export const NotHidden = styled.div`
  @media only screen and (max-width: 1289px) {
     display: none;
     
    
  }
`;

export const Menu = styled.h5`
  font-size: 1.37rem;
  margin-top: -0.45rem;
  padding: 0 1.56rem 0 0;
  font-weight: 600;
  border-bottom: 5px solid #111b47;
  
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1rem;
  color: #white;
  transition: color 0.2s ease-in;
  margin: 1.25rem 0.7rem;
  
  

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  text-align: center;
`;

export const Outline = styled(MenuOutlined)`
padding-top: 40px;
  font-size: 22px;
  padding-right: ${(props) => (props.padding ? '10px' : '')};
  text-align: center;
`;

export const Span = styled.div`
  cursor: pointer;
  color: #000;
  
	font-size: 20;
	position: "static";
  
  
  
`;
