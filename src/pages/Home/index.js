import React, {  lazy } from "react";
import Button from '../../common/ButtonMains/ButtonMain'
import {  NavLink } from 'react-router-dom';
import Tooltip from "react-simple-tooltip"
import {css} from "styled-components"
import './homeStyles.css';
import  ScrollToTop from '../../components/ScrollTopFunc';

const Container = lazy(() => import("../../common/Container"));


const Home = (props, i) => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  } 
  return (<div className="IntroContainer"> 
          <ScrollToTop>
                <Container>
                    <>
                      <NavLink to='/About'>
                      <div className="AppAboutContainer">
                        <div className="AppCon">
                          <div className="App">
                                <Tooltip
                                      arrow={8}
                                      background="rgb(209, 29, 50)"
                                      border="#0e1111"
                                      color="#FFF"
                                      content="Click to Enter JDP Electrical"
                                      fadeDuration={3}
                                      fadeEasing="linear"
                                      fixed={false}
                                      fontFamily="inherit"
                                      fontSize="inherit"
                                      offset={0}
                                      padding={8}
                                      placement="bottom"
                                      radius={33}
                                      zIndex={1}
                                        customCss={css`
                                          white-space: nowrap;
                                          word-break: break-all;
                                        `}
                                  >
                                  <Button onClick={scrollToTop}/>
                              </Tooltip>
                            </div>
                        </div>
                      </div>
                    </NavLink>
                </>
                  <NavLink to='/About'>
                    <h1 id="Enter-Title">
                    Enter JDP Electrical Services
                    </h1>
                </NavLink>
            </Container>
          </ScrollToTop>
    </div>
  );
};

export default (Home);