import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 99px;
  z-index: 10;
  background: #fff;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  padding-top: 0.8rem;
  position: sticky;
  top: 0;
  left: auto;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  background: #fff;

  @media only screen and (min-width: 768px) {
    height: 99px;
  }
`;

// This container keeps nav items in a row
export const NotHidden = styled.div`
  display: flex;
  justify-content: space-around; /* or space-between if preferred */
  align-items: center;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavLink = styled.div`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled.div`
  width: 203px;
  display: inline-block;
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
  padding: 0.01rem 1rem 1.05rem;
  display: none;

  @media only screen and (max-width: 1024px) {
    display: block !important;
  }
`;

// THIS is key:
// Each nav item is inline-flex so they line up horizontally,
// but inside each item icon + text stack vertically
export const CustomNavLinkSmall = styled.div`
  position: relative;
  overflow: hidden;
  font-size: 0.9rem;
  color: #000;
  cursor: pointer;

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.2rem;
  padding: 0.3rem 0.5rem;

  span {
    margin-top: 0.3rem;
  }

  &:is(:last-child) {
    padding: 0;
    margin: 0;
  }

  &:not(:last-child):hover {
    background-color: rgba(209, 29, 50, 0.1);
    color: rgb(180, 25, 43);
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }

  /* Inward Ripple Effect */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    background: rgba(180, 25, 43, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.6s ease-out, opacity 0.6s ease-out;
  }

  &:active::after {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.5;
    transition: transform 0s, opacity 0s;
  }
`;

export const Menu = styled.h5`
  font-size: 1.37rem;
  padding: 0;
  font-weight: 600;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #404041;
  text-align: center;
  display: flex;
  justify-content: center;
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
  font-size: 16px;
  position: static;
`;
